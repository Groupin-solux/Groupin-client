import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/BoardWritePage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



const ViewPage = () => {
    const [testList, setTestList ] = useState([]);

    let ct;

    useEffect(() => {
        axios
        .get("https://groupin-songpyeon.herokuapp.com/sports/9")
        .then((response) => {
            setTestList([response.data])
        })
        .catch(function(error){
            console.log(error);
        })
    })

    function handleClick(e) {
        e.preventDefault();
        alert("신청이 완료되었습니다.")
      }


      return (
        <>
                    {
                testList.map(post => {
                    return (
                        <span className='category'>
                <Header />
                <div class="board_wrap">
                <div class="board_title">



                    <h3>스포츠 게시판</h3>
                    <br></br><strong>글 자세히 보기</strong>
                </div>
                <div class="board_view_wrap">
                    <div class="board_view">
                        <div class="title">
                            {post.title}
                        </div>
                        <div class="place">
                            활동 지역 : {post.region}
                        </div>
                        <div class="info">
                            <dl>
                                <dt>모집 인원</dt>
                                <dd>{post.maxParticipants}</dd>
                            </dl>
                        </div>
                        <div class="view_cont">
                            <div class= 'content'>
                                세부내용
                            </div>
                            <div class="content_more">
                            {post.groupInfo}<br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                    <div class="bt_wrap">
                        <a onClick={handleClick} text="신청하기" class="on">신청하기</a>
                        <Link to="/sportsboardpage"><a class="on">Back</a></Link>
                    </div>
                </div>
            </div>

            {/* <div class="comment">
                <div class="container">
                    <h2>댓글 달기</h2>
                    <form>
                    <textarea class="comment_box" placeholder='댓글을 작성해주세요.'></textarea>
                    <div class="btn">
                        <a href="write.html" class="plus">등록하기</a>
                            <a href="" class="plus">취소하기</a>
                    </div>
                    </form>
                    
                </div>
            </div>
            <div class="comment">
            <div class="container">
            <h2>댓글 리스트</h2>
            <br></br><br></br>
            </div>
            </div> */}

                <br></br>
                <Footer />
                        </span>
                    )
                })
            }

        </>
      );
  }
             
  export default ViewPage;