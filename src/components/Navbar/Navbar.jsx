import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width="24" height="24" className="d-inline-block align-text-top me-2"/>
                    Единая школа
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/projects">Проектная деятельность</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/outschool">Внеурочная деятельность</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/portfolio" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Все для портфолио
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/portfolio/1">Олимпиады для учеников 5-8 классов</Link></li>
                            <li><Link className="dropdown-item" to="/portfolio/2">Олимпиады для учеников 9-11 классов</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/profession" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Профориентация
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/profession/pupils">Для ученика</Link></li>
                            <li><Link className="dropdown-item" to="/profession/teachers">Для учителя</Link></li>
                            <li><Link className="dropdown-item" to="/profession/tests">Анкеты</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/profession" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Полезные ссылки
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a target={"_blank"} rel="noreferrer" className="dropdown-item" href="https://schoolprofistudy511.wixsite.com/website-profistudy">
                                    Сайт школьного психолога
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} rel="noreferrer" className="dropdown-item" href="https://vk.com/proforintacia511">
                                Группа ВКонтакте
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} rel="noreferrer" className="dropdown-item" href="https://olimpiada.ru/">
                                Олимпиады Министерства Просвещения
                                </a>
                            </li>
                            <li>
                                <a target={"_blank"} rel="noreferrer" className="dropdown-item" href="http://olymp.academtalant.ru/">
                                Центр олимпиад Санкт-Петербурга
                                </a>
                            </li>
                            
                           
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
