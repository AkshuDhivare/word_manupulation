import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import NavBar from './component/NavBar';
import WordManupulation from './component/WordManupulation.js'; 
import Alert from './component/Alert';
import Slug from './component/Slug';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background= 'black';
      showAlert("Dark mode is Enabled !!!", "success");
      document.title = "Text Converter - Dark Mode !!!";
    } else {
      setMode('light');
      document.body.style.background= 'white';
      showAlert("Light mode is Enabled !!!", "success")
      document.title = "Text Converter - Light Mode !!!";
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <div className='sticky-container'>
          <NavBar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        </div>
        <div className='py-5'></div>
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/slug" element={<Slug showAlert={showAlert} />}>
            
          </Route>
          <Route path="/wordmanupulation" element={<WordManupulation showAlert={showAlert} title="Enter The Text To Analyze." />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
