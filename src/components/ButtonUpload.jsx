import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ButtonUpload = (props) => {
  const hiddenFileInput = React.useRef(null);
  const [buttonText, setButtonText] = useState("Upload");
  const handleClick = () => {
    hiddenFileInput.current.click();
    setTimeout(() => {
      setButtonText("Konfirmasi");
    }, 1000);
  };
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(URL.createObjectURL(fileUploaded));
  };

  return (
    <>
      <Button variant="success" onClick={handleClick}>
        {buttonText}
      </Button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
    </>
  );
};
export default ButtonUpload;
