import React, { useState, useEffect } from "react";
import { Form, Figure, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import APIOrder from "../apis/customer/APIOrder";
import {
  selectIsSlip,
  setIsSlip,
  setOrderData,
} from "../store/features/rentSlice";
import UploadPayment from "../assets/img/frame39.png";
import "../assets/css/payment.css";

const ButtonUpload = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSlip = useSelector(selectIsSlip);
  const [invoiceImage, setInvoiceImage] = useState();
  const hiddenFileInput = React.useRef(null);
  const orderId = params.orderId;

  const handleFile = (file) => {
    setInvoiceImage(file);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSlip === "true") {
      const formData = new FormData(e.target);
      const slip = formData.get("slip");
      console.log(slip);
      try {
        const result = await APIOrder.uploadPaymentSlip(orderId, formData);
        if (result.status === 200) {
          dispatch(setOrderData(result.data));
          navigate(`/e-tiket/${orderId}`);
        }
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setIsSlip("true"));
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
    handleFile(URL.createObjectURL(fileUploaded));
  };

  useEffect(() => {
    console.log(isSlip);
  }, [isSlip]);

  return (
    <>
      <Row>
        <Col>
          <Figure>
            {invoiceImage ? (
              <Figure.Image
                width={296}
                height={162}
                alt="Invoice"
                src={invoiceImage}
              />
            ) : (
              <Figure.Image
                width={296}
                height={162}
                alt="Invoice"
                src={UploadPayment}
              />
            )}
          </Figure>
        </Col>
        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                name="slip"
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </Form.Group>
            {isSlip === "false" && (
              <button
                className="green-button"
                variant="success"
                onClick={handleClick}
              >
                Upload
              </button>
            )}
            {isSlip === "true" && (
              <button className="green-button" variant="success" type="submit">
                Konfirmasi
              </button>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default ButtonUpload;
