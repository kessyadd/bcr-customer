import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Instruction = () => {
  return (
    <>
      <Card style={{ width: 605, height: 370 }} className="mt-3 justify-content-center">
        <Card.Body className="p-5">
          <Row>
            <h5 className="mb-4">Intruksi Pembayaran</h5>
            <Row>
              <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">ATM BCA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">M-BCA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">BCA Klik</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-4">Internet Banking</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <ul>
                <li className="fw-normal">Masukkan kartu ATM, lalu PIN</li>
                <li className="fw-normal">Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                <li className="fw-normal">Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                <li className="fw-normal">Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                <li className="fw-normal">Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Instruction;
