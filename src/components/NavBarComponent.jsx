import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBarStyles.css'
import logo1 from '../Images/logo1.jpeg'
function NavBarComponent() {
    return (
        <header className='shadow'>
            <nav>
                <img src={logo1} alt='' style={{width:'60px',height:'auto'}}>
                </img>
                <h2>
                    <Link href="/blog">Saturno</Link>
                </h2>
                <div className="internal-links">
                    <Link to="/home">Inicio</Link>
                    <Link to="/blog">Hijos</Link>
                    <Link to="/about">Autora</Link>

                </div>
                <img src=''alt=''></img>
                <div className="social-links">

                    
                </div>
            </nav>
        </header>
    )
}

export default NavBarComponent