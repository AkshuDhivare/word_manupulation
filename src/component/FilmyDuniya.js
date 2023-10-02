import React from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import MovieCard from "./MovieCard";
import { Routes, Route } from "react-router-dom";
import NetFlix from "./inner_pages/NetFlix";
import Amazon from "./inner_pages/Amazon";
import Hotstar from "./inner_pages/Hotstar";
import ContactUs from "./inner_pages/ContactUs";
import Login from "./inner_pages/Login";
import AddItems from "./inner_pages/AddItems";
import SignUp from "./inner_pages/SignUp";

// Import necessary components and dependencies

function FilmyDuniya() {
  return (
    <>
      <Headers />

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12 bg-secondary">
            {/* Define your routes using the Routes and Route components */}
            <Routes>
              <Route path="/" element={<MovieCard />} />
              <Route path="netflix" element={<NetFlix />} />
              <Route path="amazon" element={<Amazon />} />
              <Route path="hotstar" element={<Hotstar />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="additems" element={<AddItems />} />
            </Routes>
          </div>
          <div className="col-lg-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmyDuniya;
