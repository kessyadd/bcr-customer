import Navigation from "./Navigation";
import Foot from "./Foot";

const Layouts = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Foot />
    </>
  );
};

export default Layouts;
