import React, { useState } from "react";

function Slug(props) {
  const [text, setText] = useState("");

  const textInput = (event) => {
    let newText = event.target.value;
    console.log(event.target.value);
    setText(newText);
  };
  const withDash = () => {
    let withDash = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/_/g, "-");
    setText(withDash);
    console.log(withDash);
    props.showAlert("Seperate with (-) !!!", "success");
  };

  const removeNumber = () => {
    let replaceNumber = text
      .toLowerCase()
      .replace(/[^a-z\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setText(replaceNumber);
    props.showAlert("Number Removed !!!", "success");
  };
  const withUnderscore = () => {
    let withUnderscore = text
      .toLowerCase()
      .replace(/[^a-z\s-]/g, "")
      .replace(/\s+/g, "_")
      .replace(/-+/g, "-")
      .replace(/-/g, "_");
    setText(withUnderscore);
    props.showAlert("Seperate with (_) !!!", "success");
  };

  const removeDot = () => {
    let removeDot = text
      .toLowerCase()
      .replace(/[^a-z\s-]/g, "")
      .replace(/\./g, "");
    setText(removeDot);
    props.showAlert(" ( . ) Removed  !!!", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text is cleared !!!", "success");
  };

  const onCopy = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      // Check if the text was copied successfully
      if (document.getSelection().toString() === text) {
        // Copied successfully
        alert(text);
        props.showAlert("Text has been copied!", "success");
      } else {
        // Copy failed
        alert(text);
        props.showAlert("Text could not be copied!", "error");
      }
    } else {
      navigator.clipboard.writeText(text).then(
        () => {
          // Invoked if the data is copied
          alert(text);
          props.showAlert("Text has been copied!", "success");
        },
        () => {
          // Handle data copy error
          alert(text);
          props.showAlert("Text could not be copied!", "error");
        }
      );
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 py-5 text-center">
            <label className="form-label text-white bg-dark ">
              <h1 className="p-3">Text To Slug Convertor</h1>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter Text To Convert .."
              value={text}
              onChange={textInput}
              rows="8"
            ></textarea>
            <div className="py-4">
              <button
                className="btn btn-primary mx-2 my-2"
                onClick={withDash}
                type="submit"
              >
                Seperate With (-)
              </button>
              <button
                className="btn btn-success mx-2 my-2"
                onClick={removeNumber}
                type="submit"
              >
                Remove Number
              </button>
              <button
                className="btn btn-secondary mx-2 my-2"
                onClick={clearText}
                type="submit"
              >
                Clear Text
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                onClick={onCopy}
                type="submit"
              >
                Click To Copy
              </button>
              <button
                className="btn btn-secondary mx-2 my-2"
                onClick={withUnderscore}
                type="submit"
              >
                Seperate With (_)
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                onClick={removeDot}
                type="submit"
              >
                Remove (.)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slug;
