import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  document.title = 'Профиль'
  const user = useSelector(store => store.user)
  if (!user) return <div className='container'><h2>Загрузка...</h2></div> 

  console.log(user)
  return (
    <div className='container'>
      <h2 className='mb-5'>Профиль</h2>
      <div className="d-flex">
        <img className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="128" height="128" src='https://vk.com/sticker/1-70822-512' />
        <div className=" mb-0 lh-sm fs-3 border-bottom">
          <span className="d-block">{user.surname} {user.name} {user.middlename}</span>
          {user.role === "admin" ? 
          <div>
            <strong className="d-block mb-2">Администратор</strong> 
            <Link className="btn btn-primary" to="/admin">Администрирование</Link>
          </div> :
          <div>
            <strong className="d-block mb-3">{user.classname} класс</strong>
            <span>Прогресс по проекту: 0%</span>

          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Profile;
