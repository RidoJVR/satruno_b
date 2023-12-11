import React from 'react';
import Redes from '../components/Redes'
import perfil from '../Images/perfil.jpg';
import resp from '../Images/resp.jpg'
import '../styles/Autora.css';

const Autora = () => {
  return (
    <div className="aut">
      <img src={perfil} alt="Imagen de perfil" />
      <h1> May Mango</h1>
      <p>Mariel Rosales tambien conocida como May Mango o The_Creadora, una autora y dibujante Amateur </p>
      <p>Amante de distintos generos</p>
      <p>Inicio con el proyecto de Los Hijos de Saturno hace mas de 2 años y ahora cuenta con mas de </p>
      <p>100 personajes todos y cada uno distintos y unicos viviendo dentro de esta historia</p>
      <p>dentro de este ente conocido como</p>
      <img src={resp} alt='Imagen de Respaldo'></img>
      <p>Siguela en redes</p>
      <Redes/>
    </div>
  );
};

export default Autora;
