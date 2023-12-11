import React from 'react';
import '../styles/Redes.css';
import { Link } from 'react-router-dom';

const Redes = () => {
  return (
    <div className="red">
        <Link to="https://www.facebook.com/TheCreadoraM">Facebook</Link><br/>
        <Link to="https://twitter.com/The_Creadora" >Twitter</Link><br/>
        <Link to="https://www.youtube.com/@insanitythefox3003" >YouTube</Link><br/>
    </div>
  );
};

export default Redes;
