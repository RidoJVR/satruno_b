import React from 'react';
import logo1 from '../Images/logo1.jpeg';
import '../styles/Header.css';

const Hijos = () => {
  return (
    <div className="banner">
      <img src={logo1} alt="Imagen de Los Hijos" />
      <h1> Quienes son los hijos de Saturno? </h1>
      <p>inspirada por la cancion "saturno" la desconocida tomo la desision de </p>
      <p>cuidar y salvaguardar la integridad de aquellos que caen en desgracia</p>
      <p> porque lo hace? por el anelo de verlos tener un dia mas de vida,</p>
      <p>tomandoles carino como si de una madre se tratara</p>
      <br/>
      <p>asi es como la ven</p>
      <h2>como su madre</h2>
    </div>
  );
};

export default Hijos;
