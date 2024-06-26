import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Inquiry from './pages/Inquiry/Inquiry';
import Projects from './pages/Projects/Projects';
import AboutMe from './pages/AboutMe/AboutMe';
import Slideshow from './components/UI/Slideshow';
import ProjectDetail from './pages/Projects/ProjectDetail/ProjectDetail';
import Datenschutz from './pages/Datenschutz/Datenschutz';
import Impressum from './pages/Impressum/Impressum';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/UI/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Kontakt" element={<Inquiry />} />
        <Route path="/Arbeiten" element={<Projects />} />
        <Route path="/UeberMich" element={<AboutMe />} />
        <Route path="/Arbeit" element={<ProjectDetail />} />
        <Route path="/Auftrag" element={<Slideshow />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
