import React from "react";
import { Button } from "react-bootstrap";
const ButtonUpload = (props) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(URL.createObjectURL(fileUploaded));
  };
  return (
    <>
      <Button variant="success" onClick={handleClick}>
        Upload
      </Button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
    </>
  );
};
export default ButtonUpload;
