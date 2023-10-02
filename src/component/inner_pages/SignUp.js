import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Swal from "sweetalert2";

function SignUp() {
  const onSubmit = () => {
    Swal.fire("Good job!", "SignUp Successfully!", "success");
  };

  const onSignup = () => {
    Swal.fire("Good job!", "SignUp Successfully!", "success");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5 text-white text-center">
          <div className="col-lg-6 border p-5">
            <form>
              <div className="form-outline text-center mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control"
                />
              </div>
              <div className="form-outline text-center mb-4">
                <label className="form-label" htmlFor="form2Example3">
                  Mobile No
                </label>
                <input type="tel" id="form2Example3" className="form-control" />
              </div>
              <div className="form-outline text-center mb-4">
                <label className="form-label" htmlFor="form2Example2">
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
                <div className="text-center mx-2">
                  <a className="btn btn-primary mb-4" onClick={onSubmit}>
                    Sign in
                  </a>
                </div>
                <div className="col text-white">
                  <a className="btn btn-primary mb-4" onClick={onSignup}>
                    Sign Up
                  </a>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <h6>or sign up with:</h6>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <FacebookIcon className="text-white" />
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <GoogleIcon className="text-white" />
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <TwitterIcon className="text-white" />
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <GitHubIcon className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
