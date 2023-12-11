import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import NavBarComponent from './components/NavBarComponent';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import PersonajesForm from './pages/PersonajesForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route index path='/' element={<App/>}/>
        <Route index path='/home' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/personaje' element={<PersonajesForm/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);