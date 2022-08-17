import axios from 'axios';
import React, { useState, useEffect } from "react";

const GetTest = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('https://groupin-songpyeon.herokuapp.com/movie/1').then(Response => {
        setText(Response.data);
        console.log(Response.data);
    }).catch((Error)=> {
        console.log(Error);
    })
        }, [])

    return (
        <>
        {
                    text.map(post => {
                        return (
                            <span className='category'>
                                {post.id}
                                <br/>
                              
                            </span>
                        )
                    })
        }
        </>
    );
};

export default GetTest;