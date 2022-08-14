import React from 'react';
import './Login.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-form'>
            <strong>회원가입</strong>
            <form>
                <input type="email" name="email" class="text-field" placeholder="ID"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="password" name="password" class="text-field" placeholder="PW"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="text" name="nickname" class="text-field" placeholder="nickname"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="email" name="e-mail" class="text-field" placeholder="E-mail"></input>
                <br></br>
                <br></br>
            </form>

            <form class="text-field">
            <input type="radio" name="place" checked="checked" value="수도권" />서울/경기/인천/강원
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상남도" />부산/울산/경남
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상북도" />대구/경북
            <br></br>
            <input type="radio" name="place" value="충청도" />대전/충청
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="전라도" />광주/전라
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="제주도" />제주
            </form>
            
            <br></br>

            <form>
            <input type="file" class="text-field" accept="image/*,.txt" multiple required capture='user' onchange='aaa'/> 
            </form>

            <br></br>

            <Link to = "/mypage"><Button text="회원가입"/></Link>
        </div>
    );
};

export default SignUp;