import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-form'>
            <form>
                <input type="email" name="email" class="text-field" placeholder="ID"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="password" name="password" class="text-field" placeholder="PW"></input>
                <br></br>
                <br></br>
                <Link to="/mypage"><input type="submit" value="LOGIN" class="submit-btn"></input></Link>
                <hr></hr>
            </form>
            <div class="links">
                <Link to="/signuppage"><span>SIGNUP</span></Link>
            </div>

            
            
        </div>
    );
};

export default Login;