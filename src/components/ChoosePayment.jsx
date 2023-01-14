import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ChoosePayment = () => {
  return (
    <div>
      <ListGroup>
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
    </div>
  );
};

export default ChoosePayment;
