import { Navigate } from "react-router-dom";

const Authprovider = ({children}) => {
    const role = localStorage.role
    if (!role) {return <Navigate to="/"/>}
    return (children)
}

export default Authprovider;
