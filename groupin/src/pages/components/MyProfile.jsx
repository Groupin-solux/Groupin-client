import React from 'react';
import './MyProfile.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const MyProfile = ({ level, point }) => {
    return (
        <div>
        <div className='profile'>
            <img src="img/Profile.png"></img>
        <span className='level'>{level}</span><br></br>
        <span className='point'>{point}pt</span><br></br><br></br>
        <Link to = "/signmodifypage"><Button text="정보 수정"/></Link>
        </div>
        </div>
    );
};

export default MyProfile;