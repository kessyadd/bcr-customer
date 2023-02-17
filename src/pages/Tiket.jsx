import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { PDFExport } from "@progress/kendo-react-pdf";
import Checklist from "../assets/img/success.png";
import InvoicePDF from "../assets/img/Rectangle38.png";
import CustomHemlet from "../components/CustomHelmet";
import * as Icon from "react-feather";
import Invoice from "../components/Invoice";

const Tiket = () => {
  const downloadPDF = useRef(null);

  const handleDownloadPDF = (event) => {
    downloadPDF.current.save();
  };

  return (
    <>
      <CustomHemlet />
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center mt-5">
              <img style={{ width: 50, height: 50 }} src={Checklist} />
            </div>
            <h5 className="text-center fw-bold mt-4">Pembayaran Berhasil!</h5>
            <h5 className="text-center text-muted fw-normal mt-3">Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
          </Col>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Card style={{ width: 605 }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <h6 className="text-start fw-bold ms-2 mt-2">Invoice</h6>
                    </Col>
                    <Col className="text-end">
                      <Button variant="outline-primary" onClick={handleDownloadPDF}>
                        <a href="#" style={{ color: "blue", textDecoration: "none" }}>
                          <Icon.Download /> Unduh
                        </a>
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="justify-content-center mt-5 ">
                        <PDFExport
                          // fileName={"invoice"}
                          ref={downloadPDF}
                          paperSize="A4"
                        >
                          <Invoice />
                        </PDFExport>
                        {/* <img src={InvoicePDF} /> */}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Tiket;
