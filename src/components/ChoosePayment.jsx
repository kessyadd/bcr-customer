import React from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import "../assets/css/payment.css";

const ChoosePayment = () => {
  return (
    <div className="pilih-transfer d-flex justify-content-center">
      <ListGroup className="choose-payment">
        <ListGroup.Item disabled variant="light">
          <h5 className="fs-5 fw-bold">Pilih Bank Transfer</h5>
          <h5 className="fs-6">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h5>
        </ListGroup.Item>
        <Form>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3 choose">
              <ListGroup.Item variant="light">
                <Form.Check label="BCA Transfer" value="BCA" name="group1" type={type} id={`BCA Transfer`} />
              </ListGroup.Item>
              <ListGroup.Item variant="light">
                <Form.Check label="BNI Transfer" value="BNI" name="group1" type={type} id={`BNI Transfer`} />
              </ListGroup.Item>
              <ListGroup.Item variant="light">
                <Form.Check label="Mandiri Transfer" value="Mandiri" name="group1" type={type} id={`inline-${type}-2`} />
              </ListGroup.Item>
            </div>
          ))}
        </Form>
      </ListGroup>
    </div>
  );
};

export default ChoosePayment;
