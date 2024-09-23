import React from 'react';
import { NavLink } from 'react-router-dom';
import styleHeader from './Header.module.css';

const menuItems = [
    { name: 'Produtos', path: '/' },
];

const Header = () => {
    return (
        <header className={`container ${styleHeader}`}>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
