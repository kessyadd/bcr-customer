import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

const RincianBiaya = () => {
  return (
    <div className="m-5">
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>nama mobil</h1>
              <h5>kapasitas</h5>
              <div className="d-flex">
                <h5>Total</h5>
                <h5 className="text end">harga</h5>
              </div>
              <div>
                <h5>harga</h5>
                <ul>
                  <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
                </ul>
              </div>
              <div>
                <h5>Biaya Lainnya</h5>
                <ul>
                  <li>Pajak</li>
                  <li>Biaya makan sopir</li>
                </ul>
              </div>
              <div>
                <h5>Belum Termasuk</h5>
                <ul>
                  <li>Bensin</li>
                  <li>Tol parkir</li>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroupItem>
              <h1>Total</h1>
              <h5>harga</h5>
              <div className="d-grid">
                <Button variant="success">Bayar</Button>{" "}
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RincianBiaya;
