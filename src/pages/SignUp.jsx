import React from "react";
import "../assets/css/sign.css";
import "../assets/img/signin.png";
import "../assets/img/logo_login.png";

const SignIn= () => {
    useEffect(() => {
      document.title = "Binar Car Rental - Sign Up";
    }, []);
    return (
      <>
<div className="split-screen">
  <div className="left">
    <form action="#">
      <section className="login">
        <div className="row justify-content-center align-items-center w-100 h-100">
          <div className="login-container">
            <img src="../assets/img/logo_login.png" alt="logologin" />
            {/*Login Form*/}
            <div className="login-form">
              <h1>Sign Up</h1>
              <div className="form-group-first">
                <label htmlFor="nama" className="form-label">Name*</label>
                <input type="text" className="form-control" id="nama" placeholder="Nama Lengkap" /> 
              </div>
              <div className="form-group-second">
                <label htmlFor="email" className="form-label">Email*</label>
                <input type="email" className="form-control" id="email" placeholder="Contoh: johndee@gmail.com" /> 
              </div>
              <div className="form-group-last">            
                <label htmlFor="password" className="form-label">Create Password*</label>
                <input type="password" className="form-control" id="password" placeholder="+6 karakter" />
              </div>
              {/*Auth*/}
              <button className="signin">Sign In</button>
              {/*End Auth*/}
              <p className="text-start">Already have an account? <span><a href="#">Sign In here</a></span></p>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
  <div className="right blue">
    <section className="copy">
      <div className="container">
        <h1 className="abu">Binar Car Rental</h1><br />
        <img src="../assets/img/signin.png" alt="" id="headerimg" />
      </div>
    </section>
  </div>
</div>


      </>
    );
  };
  
  export default SignUp;
  