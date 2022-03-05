import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'
const Header = () => {
    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        window.location.reload();
    }
    return (
        <header className='bg-light sticky-top'>
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/outschool">Факультативы</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/portfolio">Портфолио</Link>
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
                        {!localStorage.username ?
                        <Link to="/login" className="navbar-text">
                            Войти
                        </Link> :
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {localStorage.username}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {localStorage.role === "admin"? 
                                <li><Link className="dropdown-item" to="/admin">Администрирование</Link></li>:
                                <li><Link className="dropdown-item disabled" to="/projects">Проекты</Link></li>
                                }
                                <li><button className="dropdown-item " onClick={logout}>Выйти</button></li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
