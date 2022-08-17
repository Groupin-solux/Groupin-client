import React, {useState, useEffect} from 'react';
import '../CSS/MyProfile.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

const YOUR_APP_ID = "8B76618E-229C-4D86-8826-24A082D30FB8"
const USER_ID = "jeongin yoon"
const Chatting = ({}) => {
    return (

        <>
        <div className="App">
            <SendbirdApp appId='8B76618E-229C-4D86-8826-24A082D30FB8' userId='116240' accessToken='a9f045719f45070867e0f4b319fd46e7daabfaff'>
                
            </SendbirdApp>

        </div>
        </>
    )
}

export default Chatting;