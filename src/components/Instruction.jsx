import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const Instruction = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Body className="p-5">
          <Row>
            <h5>Intruksi Pembayaran</h5>
            <Row>
              <Col>
                <h5>ATM BCA</h5>
              </Col>
              <Col>
                <h5>M-BCA</h5>
              </Col>
              <Col>
                <h5>BCA Klik</h5>
              </Col>
              <Col>
                <h5>Internet Banking</h5>
              </Col>
            </Row>
            <Row>
              <ul>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi </li>
                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Instruction;
