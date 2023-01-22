import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ChoosePayment = () => {
  const ShowChecklist = () => {
    alert("mandiri");
  };

  function isChecked() {
    if (document.getElementsByClassName("choose-payment").checked) {
      document.getElementsByClassName("bca").textContent = "YA";
    }
  }

  return (
    <div className="m-5">
      <ListGroup className="choose-payment">
        <ListGroup.Item disabled variant="light">
          <h5 className="fs-5 fw-bold">Pilih Bank Transfer</h5>
          <h5 className="fs-6">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h5>
        </ListGroup.Item>
        <ListGroup.Item className="bca" action onClick={isChecked} variant="light">
          BCA Transfer
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          BNI Transfer
        </ListGroup.Item>
        <ListGroup.Item action onClick={ShowChecklist} variant="light">
          Mandiri Transfer
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ChoosePayment;
