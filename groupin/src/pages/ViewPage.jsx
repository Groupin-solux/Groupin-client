import Header from './components/Header';
import Footer from './components/Footer';
import './BoardWritePage.css';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ViewPage = () => {
    const [testList, setTestList ] = useState([]);

    useEffect(() => {
        axios
        .get("https://groupin-songpyeon.herokuapp.com/sports/2")
        .then((response) => {
            setTestList([response.data])
            console.log("----------test data--------: ", response);
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
                            {post.category}
                            <br/>
                            
                        </span>
                    )
                })
            }
          <Header />
          <div class="board_wrap">
        <div class="board_title">
            <strong>글 자세히 보기</strong>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title">
                    야구 경기 같이 보러 갈 사람 모집합니다.
                </div>
                <div class="place">
                    활동 지역 : 서울 지역 전체
                </div>
                <div class="info">
                    <dl>
                        <dt>모집 인원</dt>
                        <dd>5명</dd>
                    </dl>
                </div>
                <div class="view_cont">
                    <div class= 'content'>
                        세부내용
                    </div>
                    <div class="content_more">
                       이번 시즌 야구 경기 같이 보러 다닐 사람 모집합니다!<br></br>
                       자세한 일정은 아직 생각해보지 않아서 인원 먼저 모으로 같이 이야기 해봤으면 좋겠어요.<br></br>
                       거주지는 서울이면 편할 것 같은데 크게 제약 두지 않고 싶습니다~<br></br>
                       궁금하신 점 있으면 댓글 남겨주세요!<br></br><br></br><br></br>
                    </div>
                </div>
            </div>
            <div class="bt_wrap">
                <a href="index.html" class="on">신청하기</a>
                <a href="index.html" class="on">Back</a>
            </div>
        </div>
    </div>

    <div class="comment">
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
    </div>

        <br></br>
          <Footer />
        </>
      );
    }

  export default ViewPage;