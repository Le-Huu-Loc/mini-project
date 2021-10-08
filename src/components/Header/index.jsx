import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { FiAlignJustify } from 'react-icons/fi'

function Header() {

    window.onscroll = () => scrollBar()
    function scrollBar() {
        const header = document.querySelector('.header')
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            header.style.backgroundColor = '#8a8af9'
        }
        else
            header.style.backgroundColor = '#ccccff'
    }

    function handleOnClickMenu() {
        // e.currentTarget.classList.toggle("background")
        // e.currentTarget.parentElement.parentElement.children[1].children[0].classList.toggle("showMenu")
        document.querySelector('.header-container__items').classList.toggle("background")
        document.querySelector('.header-container__item ul').classList.toggle("showMenu")
    }
    function handleOnClickHome() {
        document.querySelector('.header-container__items').classList.remove("background")
        document.querySelector('.header-container__item ul').classList.remove("showMenu")
    }

    return (
        <div className="header">
            <div className="header-container">
                <div>
                    <Link to="/" className="header-container__logo" onClick={handleOnClickHome}>Front-End</Link>
                    <div className="header-container__items" onClick={handleOnClickMenu}><FiAlignJustify color="#fff" size="35px" /></div>
                </div>
                <div className="header-container__item">
                    <ul>
                        <li><NavLink exact to="/birthdays" activeClassName="active" onClick={handleOnClickMenu}>Birthday</NavLink></li>
                        <li><NavLink exact to="/user" activeClassName="active" onClick={handleOnClickMenu}>List User</NavLink></li>
                        <li><NavLink exact to="/cart" activeClassName="active" onClick={handleOnClickMenu}>Shopping Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;