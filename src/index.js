import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inquiry from './pages/Inquiry/Inquiry';
import Projects from './pages/Projects/Projects';
import Jobs from './pages/Jobs/Jobs';
import AboutMe from './pages/AboutMe/AboutMe';
import Slideshow from './components/UI/Slideshow';
import ProjectDetail from './pages/Projects/ProjectDetail/ProjectDetail'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Anfragen" element={<Inquiry />} />
      <Route path="/EigeneArbeiten" element={<Projects />} />
      <Route path="/Auftraege" element={<Jobs />} />
      <Route path="/UeberMich" element={<AboutMe />} />
      <Route path="/Arbeit" element={<ProjectDetail />} />
      <Route path="/Auftrag" element={<Slideshow />} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
