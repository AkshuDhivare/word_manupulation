import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Swal from "sweetalert2";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { movieref } from "../../firebase/firebase.js";

function AddItems() {
  const [form, setForm] = useState({
    imgsrc: "",
    title: "",
    series: "",
    link: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await addDoc(movieref, form);
      Swal.fire("Success", "Movie Added Successfully!", "success"); // Corrected typo in success message
    } catch (error) {
      Swal.fire("Error", "An error occurred.", "error"); // Corrected typo in error message
    } finally {
      setLoading(false); // Make sure to reset loading state whether success or error
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5 text-white">
          <div className="col-lg-6">
            <form onClick={(e) => e.preventDefault()}>
              {/* <div class="form-outline mb-4">
                  <input onChange={(e)=> setForm({...form, })} type="text" id="form4Example1" class="form-control" />
                  <label class="form-label" for="form4Example1">
                    Name
                  </label>
                </div> */}

              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">
                  <h6>
                    Image Link &nbsp;
                    <AddLinkIcon />
                  </h6>
                </label>
                <input
                  value={form.imgsrc}
                  onChange={(e) => setForm({ ...form, imgsrc: e.target.value })}
                  type="text"
                  id="form4Example2"
                  class="form-control"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">
                  <h6>Title</h6>
                </label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  type="text"
                  id="form4Example2"
                  class="form-control"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">
                  <h6>
                    Link &nbsp;
                    <AddLinkIcon />
                  </h6>
                </label>
                <input
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  type="text"
                  id="form4Example2"
                  class="form-control"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form4Example3">
                  <h6>Description</h6>
                </label>
                <textarea
                  class="form-control"
                  type="text"
                  id="form4Example3"
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-dark btn-block mb-4 "
                  onClick={onSubmit}
                >
                  {loading ? <TailSpin /> : <AddIcon />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItems;
