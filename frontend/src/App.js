import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import {BrowserRouter} from 'react-router-dom';
import Students from "./components/Students";
import { Route, Routes } from 'react-router';
import Manage from "./components/Manage";
import Home from "./components/home";

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;

