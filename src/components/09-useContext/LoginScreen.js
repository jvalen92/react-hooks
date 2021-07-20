import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const handleClick = () => {
        setUser({
            id: 123,
            name: 'Sebastian'
        })
    }


    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginScreen
