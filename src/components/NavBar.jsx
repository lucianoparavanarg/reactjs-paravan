import React from 'react';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Tienda de bebidas</a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">PRODUCTOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACTO</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
