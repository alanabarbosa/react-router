import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate("/about");
    }

    return (
        <div>
            <h2>Login</h2>
            Página: {location.pathname}
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
