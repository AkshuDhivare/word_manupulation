import React, { useState } from "react"

export default function WordManupulation(props) {

    const [text, setText] = useState("");

    const enterText = (event) => {
        console.log("typing");
        let newText = event.target.value;
        setText(newText);

    }

    const UpChange = () => {
        console.log("click to upper case" + text);
        let textup = text.toUpperCase();
        setText(textup);
        props.showAlert("Upper case Converted !!!","success");

    }
    const LoChange = () => {
        console.log("click to lower case");
        let textlo = text.toLowerCase();
        setText(textlo);
        props.showAlert("Lower case Converted !!!","success");
    }
    const clickClear = () => {
        console.log("click to click text");
        let toClear = "";
        setText(toClear);
        props.showAlert("Text has been cleard !!!","success");

    }
    // const onCopy = () => { 
    //     navigator.clipboard.writeText(text).then(
    //         () => {
    //             // invoked if the data is copied
    //             alert(text);
    //     props.showAlert("text has been copied !!!","success");

    //         },
    //         () => {
    //             // handle data copy error
    //            alert(text);
    //             props.showAlert("text has not been copied !!!","error");
    //         }
    //       )
    // }

    const onCopy = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
          const el = document.createElement('textarea');
          el.value = text;
          el.setAttribute('readonly', '');
          el.style.position = 'absolute';
          el.style.left = '-9999px';
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
      
          // Check if the text was copied successfully
          if (document.getSelection().toString() === text) {
            // Copied successfully
            alert(text);
            props.showAlert('Text has been copied!', 'success');
          } else {
            // Copy failed
            alert(text);
            props.showAlert('Text could not be copied!', 'error');
          }
        } else {
          navigator.clipboard.writeText(text).then(
            () => {
              // Invoked if the data is copied
              alert(text);
              props.showAlert('Text has been copied!', 'success');
            },
            () => {
              // Handle data copy error
              alert(text);
              props.showAlert('Text could not be copied!', 'error');
            }
          );
        }
      };
      


    const removeExtraSpaces = () => {
        const cleanedText = text.replace(/\s+/g, ' ');
        setText(cleanedText);
        props.showAlert("Extra spaces are removed !!!","success");
      };
    return (
        <>
          
            <div className="container">
                <div className="mb-3 text-center">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-white bg-dark"><h1>{props.title}</h1></label>
                    <textarea className="form-control" value={text} onChange={enterText} placeholder="Enter Text Here..." id="exampleFormControlTextarea1" rows="8"></textarea>
                    <div className="py-2">
                        <button className="btn btn-primary mx-2 my-2" onClick={UpChange} type="submit">Click To UpperCase</button>
                        <button className="btn btn-success mx-2 my-2" onClick={LoChange} type="submit">Click To LowerCase</button>
                        <button className="btn btn-secondary mx-2 my-2" onClick={clickClear} type="submit">Clear Text</button>  
                        <button className="btn btn-primary mx-2 my-2" onClick={onCopy} type="submit">Click To Copy</button>
                        <button className="btn btn-success mx-2 my-2" onClick={removeExtraSpaces} type="submit">removeExtraSpaces</button>  
                </div>
                <div className="py-3 my-5 text-center bg-primary"  >
                    <h1 className="text-white">PREVIEW</h1>
                    <hr />
                    <br />
                    <h5 className="text-white"><strong>{text}</strong></h5>
                </div>

                <div className="py-2 bg-dark text-center">
                    <h1 className="text-white">sentence and word count from text area.</h1>
                    <br />
                    <h4 className="text-white">The Word count is : {text.split(" ").length} and The Character Count is : {text.length}</h4>
                </div>
       </div>
       </div>
            
        </>
    )
}