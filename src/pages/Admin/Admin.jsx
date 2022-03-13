import { Link } from 'react-router-dom';
import { CloseButton } from '../../components';
const Admin = () => {
    document.title = "Панель администрирования"
    
    return (
        <div className='container'>
            <CloseButton/>
            <h2>Панель администрирования</h2>
            <div className="card-group">
                <div className="card">
                    <h5 className="card-header">Посты</h5>
                    <div className="card-body">
                        <h5 className="card-title">Администрирование постов</h5>
                        <p className="card-text">Создание, редактирование и удаление постов</p>
                        <Link to="createpost" className="btn btn-primary m-2">Создать</Link>
                        <Link to="updatepost" className="btn btn-primary m-2">Изменить</Link>
                    </div>
                </div>
                <div className="card">
                    <h5 className="card-header">Уроки</h5>
                    <div className="card-body">
                        <h5 className="card-title">Администрирование уроков</h5>
                        <p className="card-text">Создание, редактирование и удаление уроков</p>
                        <Link to="createlesson" className="btn btn-primary m-2">Создать</Link>
                        <Link to="updatelesson" className="btn btn-primary m-2">Изменить</Link>
                    </div>
                </div>
            </div>
            <div className="card-group mt-2">
                <div className="card">
                    <h5 className="card-header">Анкетирование</h5>
                    <div className="card-body">
                        <h5 className="card-title">Статистика выполненных анкет</h5>
                        <p className="card-text">Просмотр результатов анкет, заполненных учениками</p>
                        <Link to="teststatistics" className="btn btn-primary m-2">Открыть</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
