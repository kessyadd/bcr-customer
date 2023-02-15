import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ButtonUpload = (props) => {
  const [isSlip, setIsSlip] = useState("false");
  const hiddenFileInput = React.useRef(null);
  const [buttonText, setButtonText] = useState("Upload");

  const handleClick = (e) => {
    if (isSlip === "false") {
      hiddenFileInput.current.click();
      setIsSlip("true");
      setTimeout(() => {
        setButtonText("Konfirmasi");
      }, 1000);
    }
    if (isSlip === "true") {
    }
  };
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(URL.createObjectURL(fileUploaded));
  };

  return (
    <>
      <button className="green-button" variant="success" onClick={handleClick}>
        {buttonText}
      </button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
    </>
  );
};
export default ButtonUpload;
