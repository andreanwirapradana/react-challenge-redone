import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function SignIn() {
    let [user, setUser] = useState({});

    const handleForm = (event) => {
        event.preventDefault();
        let obj = {
            userName: '',
            email: ''
        }
        obj.userName = event.target[0].value
        obj.email = event.target[1].value
        setUser(obj);
    }

    return (
        <div>
            <h1>Sign In</h1>
            {
                !user.userName ?
                <form onSubmit={handleForm}>
                    <input type='text' placeholder="Insert Username" />
                    <input type='text' placeholder="Insert Email" />
                    <input type='submit' />
                </form>
                :
                <div>
                    <h3>Thank you for signing in</h3>
                    <p>{user.userName}</p>
                    <p>{user.email}</p>
                    <button><Link to={{pathname: '/user', user: user}} >Press This Button to redirect you to profile page</Link></button>
                </div>

            }
        </div>
    )
}

export default SignIn;