import React from "react";
import Card from "react-bootstrap/Card";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectBank } from "../store/features/rentSlice";

const Instruction = () => {
  const bankData = [
    {
      id: "bca",
      name: "BCA",
      atm: "ATM BCA",
      mbanking: "m-BCA",
      ebanking: "Klik BCA",
    },
    {
      id: "bni",
      name: "BNI",
      atm: "ATM BNI",
      mbanking: "m-BNI",
      ebanking: "BNI Klik",
    },
    {
      id: "mandiri",
      name: "Mandiri",
      atm: "ATM Mandiri",
      mbanking: "m-Mandiri",
      ebanking: "Mandiri Klik",
    },
  ];
  const bank = useSelector(selectBank);
  const selectedBank = bankData.filter((bankList) => bankList.id === bank);

  return (
    <>
      {bank ? (
        <Card
          style={{ width: 605, height: 370 }}
          className="mt-3 justify-content-center"
        >
          <Card.Body className="p-5">
            <Tabs
              defaultActiveKey="atm"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="atm" title={selectedBank[0].atm}>
                <div>
                  <ol>
                    <li className="fw-normal">Masukkan kartu ATM, lalu PIN</li>
                    <li className="fw-normal">
                      Pilih menu “Transaksi Lainnya” – "Transfer” – “Ke Rek{" "}
                      {selectedBank[0].name} Virtual Account”
                    </li>
                    <li className="fw-normal">
                      Masukkan nomor {selectedBank[0].name} Virtual Account:
                      70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis
                      7002012345678
                    </li>
                    <li className="fw-normal">
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi{" "}
                    </li>
                    <li className="fw-normal">
                      Ambil dan simpanlah bukti transaksi tersebut
                    </li>
                  </ol>
                </div>
              </Tab>
              <Tab eventKey="mobile" title={selectedBank[0].mbanking}>
                <div>
                  <ol>
                    <li style={{ fontWeight: "normal" }}>
                      Login ke "{selectedBank[0].name} Mobile"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Pilih "{selectedBank[0].mbanking}"
                    </li>
                    <li style={{ fontWeight: "normal" }}>Pilih "m-transfer"</li>
                    <li style={{ fontWeight: "normal" }}>
                      Pilih "{selectedBank[0].name} Virtual Account"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Masukkan "Nomor Virtual" yang tertera pada order status
                      dan pilih "OK"
                    </li>
                    <li style={{ fontWeight: "normal" }}>Pilih "Send"</li>
                  </ol>
                </div>
              </Tab>
              <Tab eventKey="e-bank" title={selectedBank[0].ebanking}>
                <div>
                  <ol>
                    <li style={{ fontWeight: "normal" }}>
                      Login ke "{selectedBank[0].ebanking}"
                    </li>
                    <li style={{ fontWeight: "normal" }}>Pilih "Transfer"</li>
                    <li style={{ fontWeight: "normal" }}>
                      Pilih "Transfer ke {selectedBank[0].name} Virtual Account"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Masukkan "Nomor Virtual" yang tertera pada order status
                      dan pilih "Lanjut"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Masukkan "key{selectedBank[0].name}" lalu pilih "Send"
                    </li>
                  </ol>
                </div>
              </Tab>
              <Tab eventKey="internet" title="E-Banking">
                <div>
                  <ol>
                    <li style={{ fontWeight: "normal" }}>
                      Login ke {selectedBank[0].ebanking}
                    </li>
                    <li style={{ fontWeight: "normal" }}>Pilih "Transfer"</li>
                    <li style={{ fontWeight: "normal" }}>
                      Pilih "Transfer ke {selectedBank[0].name} Virtual Account"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Masukkan "Nomor Virtual" yang tertera pada order status
                      dan pilih "Lanjut"
                    </li>
                    <li style={{ fontWeight: "normal" }}>
                      Masukkan "key{selectedBank[0].name}" lalu pilih "Send"
                    </li>
                  </ol>
                </div>
              </Tab>
            </Tabs>
            {/* <Row>
            <h5 className="mb-4">Intruksi Pembayaran</h5>
            <Row>
              <Nav fill variant="tabs" defaultActiveKey="#">
                <Nav.Item>
                  <Nav.Link href="#">ATM BCA</Nav.Link>
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
          </Row> */}
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default Instruction;
