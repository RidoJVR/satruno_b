// 
import React from 'react';
import logo1 from '../Images/logo1.jpeg';
import '../styles/Header.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo1} alt="Imagen de banner" />
      <h1> Que es Saturno?</h1>
      <p>Saturno es muchas cosas, desde una herramienta, una segunda oportunidad</p>
      <p>incluso un eden</p>
      <p>hay muchas dudas dentro de este lugar aunque la principal duda es</p>
    </div>
  );
};

export default Banner;

