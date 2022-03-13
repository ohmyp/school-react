import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Authprovider = ({children}) => {
    const [auth, setauth] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API}/api/auth`, {
                headers: {'Authorization': `Bearer ${localStorage.access_token}`}
            }).then(res => {
                if (res.data?.name === "JsonWebTokenError") setauth(false)
                if (res.data?.role === "pupil") setauth(false)
            }).catch(err => setauth(false))
        }  
        fetchData()
    }, [])
    
    if (!auth) return <Navigate to='/' />
    return (children)
}

export default Authprovider;
