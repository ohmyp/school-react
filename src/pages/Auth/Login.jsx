import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    if (localStorage.access_token) {return <Navigate to="/"/>}
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_SERVER}/api/auth/login`, { username: login, password })
        .then(async res => {
            const {accessToken, username, role, name, surname, middlename} = res.data
            console.log(res.data);
            localStorage.access_token = accessToken
            window.location.reload()
            await dispatch({type: "ADD_USER", payload: {username, role, name, surname, middlename}})
        })
    }
    return (
        <div className="text-center w-50 m-auto ">
        <div className="text-center ">
            <form>
                <h1 className="h3 mb-3 fw-normal">Вход на портал</h1>
                <div className="form-floating mt-2">
                    <input type="text" className="form-control" id="username" name="username" value={login} onChange={(e => setLogin(e.target.value))}/>
                    <label htmlFor="username">Имя пользователя</label>
                </div>
                <div className="form-floating mt-2">
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e => setPassword(e.target.value))}/>
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" onClick={handleSubmit}>Войти</button>
            </form>
        </div>
        </div>
    );
}

export default Login;
