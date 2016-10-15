import React from 'react';

export const NavBar = (props)=>{
    //stateless component
    return(
        <nav className="light-blue lighten-1 hoverable" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="/api/" className="brand-logo">APP</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">abc</a></li>
                    <li><a href="#">abc</a></li>
                    <li><a href="#">abc</a></li>
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
}