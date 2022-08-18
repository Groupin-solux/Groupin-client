import axios from 'axios';
import React, { useEffect, useState, Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/BoardWritePage.css';
import { Link } from 'react-router-dom';

const ReviewPage= () => {
    const [testList, setTestList ] = useState([]);

    useEffect(() => {
        axios
        .get("https://groupin-songpyeon.herokuapp.com/review/1")
        .then((response) => {
            setTestList([response.data])
        })
        .catch(function(error){
            console.log(error);
        })
    })
          return (
        <>
                    {
                testList.map(post => {
                    return (
                        <span className='category'>
                            <Header />
          <div class="board_wrap">
        <div class="board_title">
            <strong>후기글 보기</strong>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title">
                    {post.title}
                </div>
                <div class="place">
                    닉네임 : {post.user.id}
                </div>
                <div class="info">
                    <dl>
                        <dt>작성 날짜</dt>
                        <dd>{post.createdAt[0]}.{post.createdAt[1]}.{post.createdAt[2]}</dd>
                    </dl>
                </div>
                <div class="view_cont">
                    <div class= 'content'>
                        후기
                    </div>
                    <div class="content_more">
                       {post.content}<br></br><br></br><br></br>
                    </div>
                </div>
            </div>
            <div class="bt_wrap">
            <Link to="/reviewboard"><a class="on">Back</a></Link>
            </div>
        </div>
    </div>

    
        <br></br>
          <Footer />
                        </span>
                    )
                })
            }

        </>
      );
  }
             
  export default ReviewPage;