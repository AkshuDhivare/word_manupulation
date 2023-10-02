import React, { useState } from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Swal from "sweetalert2";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = () => {
    Swal.fire("Good job!", "Message Send Successfully!", "success"); // Corrected typo in success message
  };

  return (
    <>
      <div className="mb-4 container text-white">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-8 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label className="py-2" htmlFor="name">
                      {" "}
                      {/* Corrected 'classNameName' to 'htmlFor' */}
                      Your name
                    </label>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={form.name}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label className="py-2" htmlFor="email">
                      {" "}
                      {/* Corrected 'classNameName' to 'htmlFor' */}
                      Your email
                    </label>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label className="py-2" htmlFor="subject">
                      {" "}
                      {/* Corrected 'classNameName' to 'htmlFor' */}
                      Subject
                    </label>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={form.subject}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label className="py-2" htmlFor="message">
                      {" "}
                      {/* Corrected 'classNameName' to 'htmlFor' */}
                      Your message
                    </label>

                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left pt-3">
              <a className="btn btn-primary" onClick={onSubmit}>
                Send &nbsp; <AddIcCallIcon />
              </a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-4 text-center ">
            <ul className="list-unstyled mb-0 border p-5">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
