import React from 'react';
import './Header.scss';

function Header({setCurrentPage}) {

    return (
        <header className="header-main">
             <a href="#!" onClick={setCurrentPage}>Autoddit</a>
             <a href="#!" onClick={() => {
                 setCurrentPage('articleForm')
                 }}> CREATE A NEW ARTICLE </a>
        </header>
    );
}

export default Header;