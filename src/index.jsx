import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter} from "react-router-dom";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';
import Intro from "./pages/Intro";
import { Roots2stem, FRC4627, FRC5078, Toyota, UofTHacks, Toyota2023, Hackthe6ix } from "./pages/Experiences";
import { Gokart, Plant, Sanitizer, Project1a, PiLaptop, Marketalarm, RCplanes, Openmv } from "./pages/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="roots2stem" element={<Roots2stem />} />
          <Route path="frc4627" element={<FRC4627 />} />
          <Route path="frc5078" element={<FRC5078 />} />
          <Route path="1afinalproject" element={<Project1a />} />
          <Route path="RPilaptop" element={<PiLaptop />} />
          <Route path="marketalarm" element={<Marketalarm />} />
          <Route path="gokart" element={<Gokart />} />
          <Route path="plant" element={<Plant />} />
          <Route path="openmv" element={<Openmv />} /> 
          <Route path="rcplanes" element={<RCplanes />} />
          <Route path="sanitizer" element={<Sanitizer />} />
          <Route path="toyotainnovation" element={<Toyota />} />
          <Route path="toyotainnovation2023" element={<Toyota2023 />} />
          <Route path="uofthacks" element={<UofTHacks />} />
          <Route path="hackthe6ix" element={<Hackthe6ix />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
