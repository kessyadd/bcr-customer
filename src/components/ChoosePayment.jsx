import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ChoosePayment = () => {
  return (
    <div className="m-5">
      <ListGroup>
        <ListGroup.Item disabled variant="light">
          <h5 className="fs-5 fw-bold">Pilih Bank Transfer</h5>
          <h5 className="fs-6">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h5>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          BCA Transfer
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          BNI Transfer
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Mandiri Transfer
        </ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ChoosePayment;
