import { useSelector } from 'react-redux';

const token = useSelector(state => state.token)

useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/api/posts`,{
            headers: {'Authorization': `Bearer ${token}` }
        })
    .then(res => {
            (res.data.name === "JsonWebTokenError") ? setError({message: "Ошибка доступа"}) : setError(null)
            setTimeout(() => {setPosts(res.data)}, 500)
        },
        err => {setError(err)}
    )
}, [token])

if (error) {return (<h2 className='container'>{error.message}</h2>)}
// -------------------------------
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch()
const token = useSelector(state => state.token)
const username = useSelector(state => state.username)
const role = useSelector(state => state.role)
dispatch({type:"ADD_TOKEN", payload: accessToken})
dispatch({type:"ADD_USERNAME", payload: username})
dispatch({type:"ADD_ROLE", payload: role})