import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div className="container-fluid">
            Tienda de bebidas
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto" style={{color: "white"}}>
                
                    <Link to='/'>
                        <li className="nav-link">Home</li>
                    </Link>
                    <Link to='/productos/'>
                        <li className="nav-link">PRODUCTOS</li>
                    </Link>
                    <Link to='/contacto'>
                        <li className="nav-link">CONTACTO</li>
                    </Link>
                    </ul>

            </div>
            <CartWidget/>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
