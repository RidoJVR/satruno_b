import { Link } from 'react-router-dom'
import React from 'react';
import saturno2 from '../Images/saturno2.jpeg'
import '../styles/Description.css';

const Description = () => {
    return (
      <div className="desc">
        <img src={saturno2} alt="Imagen de banner" />
        <h1> Quien es Saturno?</h1>
        <p>Saturno, Madre, Cuidadora.</p>
        <p>
            desde los inicios saturno a recabado informacion de miles de personas
            </p>
        <p>
            pero dentro de ella esconde mas que solo informacion
            </p>
        <p>
            esconde lo mas preciado para ella
        </p>
        <h2><Link to="/blog">Sus Hijos</Link></h2>
      </div>
    );    
};
  
export default Description;