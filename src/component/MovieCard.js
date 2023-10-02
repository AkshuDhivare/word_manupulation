import React, { useEffect, useState } from "react";
import Data from "./Data";
import { TailSpin } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { movieref } from "../firebase/firebase";

function MovieCard() {
  const [data, setData] = useState(Data);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const _data = await getDocs(movieref);
  //     _data.forEach((doc) => {
  //       setData([...doc, doc.data()]);
  //     });
  //     console.log(_data);
  //     setLoading(false);
  //   }
  //   getData();
  // }, []);

  return (
    <div className="row justify-content-center py-5">
      {loading ? (
        <TailSpin />
      ) : (
        data.map((currentData, index) => {
          const { imgsrc, sname, title, link } = currentData;
          return (
            <div className="col-lg-3 my-3 justify-content-center" key={index}>
              <div className="card text-center" style={{ width: "18rem" }}>
                <img src={imgsrc} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name : {title}</h5>
                  <p className="card-text">Platform : {sname}</p>
                  <a href={link} className="btn btn-primary">
                    Watch Link
                  </a>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default MovieCard;
