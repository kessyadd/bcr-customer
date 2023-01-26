import React from "react";
import "../assets/css/sign.css";
import "../assets/img/signin.png";

const SignIn= () => {
    useEffect(() => {
      document.title = "Binar Car Rental - Sign In";
    }, []);
    return (
      <>
    <div className="split-screen">
        <div className="left">
            <form action="#">
            <section className="login">
                <div className="row align-items-center w-100 h-100">
                <div className="login-container">
                    <img src="../assets/img/logo_login.png" alt="logologin" />
                    {/*Login Form*/}
                    <div className="login-form">
                    <h1>Welcome Back!</h1>
                    <div className="form-group-first">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Contoh: johndee@gmail.com" /> 
                    </div>
                    <div className="form-group-last">            
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="+6 karakter" />
                    </div>
                    {/*Auth*/}
                    <button className="signin">Sign In</button>
                    {/*End Auth*/}
                    <p className="text-center">Don’t have an account? <span><a href="#">Sign Up for free</a></span></p>
                    </div>
                </div>
                </div>
            </section>
            </form>
        </div>
        <div className="right blue">
            <section className="copy container">
                <h1 className="abu">Binar Car Rental</h1>
                <img src="../assets/img/signin.png" alt="" />
            </section>
        </div>
    </div>

      </>
    );
  };
  
  export default SignIn;
  