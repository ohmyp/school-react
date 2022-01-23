import React from 'react';
import './Header.css'
import { Nav } from '../index'

const Header = () => {
    return (
        <header className='bg-light sticky-top'>
            <Nav />
        </header>
    );
}

export default Header;
