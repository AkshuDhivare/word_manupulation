import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Login() {
  const onSubmit = () => {
    Swal.fire("Good job!", "Login Successfully!", "success"); // Corrected typo in success message
  };

  return (
    <>
      <div className="container">
        {/* Corrected 'classNameName' to 'className' */}
        <div className="row justify-content-center py-5 text-white text-center">
          {/* Corrected 'classNameName' to 'className' */}
          <div className="col-lg-6 border p-5">
            <form className="">
              {/* Removed extra 'className' attribute */}
              <div className="form-outline text-center mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  {/* Corrected 'for' to 'htmlFor' */}
                  Email address
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
              <div className="form-outline text-center mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  {/* Corrected 'for' to 'htmlFor' */}
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
              </div>
              <hr />
              <div className="d-flex mb-4">
                {/* <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                    />
                    <label className="form-check-label" htmlFor="form2Example31"> {/* Corrected 'for' to 'htmlFor' 
                     
                      Remember me{" "}
                    </label>
                  </div>
                </div> */}

                <div className="text-center mx-2">
                  <a className="btn btn-primary mb-4" onClick={onSubmit}>
                    Sign in
                  </a>
                </div>
                <div className="col text-white">
                  {/* <a href="#!">Forgot password?</a>
                   */}
                  <Link to="signup" className="btn btn-primary mb-4">
                    Sign Up
                  </Link>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <h6>or sign up with :</h6>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <FacebookIcon className="text-white" />{" "}
                  {/* Corrected 'classNameName' to 'className' */}
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <GoogleIcon className="text-white" />{" "}
                  {/* Corrected 'classNameName' to 'className' */}
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <TwitterIcon className="text-white" />{" "}
                  {/* Corrected 'classNameName' to 'className' */}
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <GitHubIcon className="text-white" />{" "}
                  {/* Corrected 'classNameName' to 'className' */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
