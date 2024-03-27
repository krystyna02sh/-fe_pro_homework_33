// src/components/Header/Header.js
import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header><div className='container'>
                <nav>
                    <ul className='flex'>
                        <li className='item'>
                            <Link to="/">Головна</Link>
                        </li>
                        <li className='item'>
                            <Link to="/about">Про мене</Link>
                        </li>
                        <li className='item'>
                            <Link to="/contact">Контакти</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </header>
            <main>
                <Outlet />
            </main>

        </div>

    );
}

export default Header;
