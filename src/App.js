import React from 'react';
import './App.css';
import Navbar from './features/Common/Navbar';
import Routing from './features/Common/Routing';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid p-0 d-flex flex-column" style={{marginTop: "-75px"}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
