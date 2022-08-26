import React, {useState, useEffect} from 'react';
import '../CSS/MyProfile.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

const Chatting = ({}) => {
    return (

        <>
        <div className="App">
            <SendbirdApp appId='' userId='' accessToken=''>
                
            </SendbirdApp>

        </div>
        </>
    )
}

export default Chatting;