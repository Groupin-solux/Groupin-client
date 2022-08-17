import React, {useState, useEffect} from 'react';
import '../CSS/MyProfile.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyProfile = ({ level, point }) => {

    const [testList, setTestList ] = useState([]);

    useEffect(() => {
        axios
        .get("https://groupin-songpyeon.herokuapp.com/sports/5")
        .then((response) => {
            setTestList([response.data])
            //console.log("----------test data--------: ", response);
        })
        .catch(function(error){
            console.log(error);
        })
    })

    return (

        <div>
            {
                testList.map(post => {
                    return (
                        <span className='category'>
                            {post.category}
                            <br/>
                            {post.user.nickname}
                        </span>
                    )
                })
            }
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