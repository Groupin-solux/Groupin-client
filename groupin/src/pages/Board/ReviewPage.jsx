import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/BoardWritePage.css';
import { Link } from 'react-router-dom';

class ReviewPage extends Component {
    render() {
      return (
        <>
          <Header />
          <div class="board_wrap">
        <div class="board_title">
            <strong>후기글 보기</strong>
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
                        후기
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
                <a class="on">신청하기</a>
                <a class="on">Back</a>
            </div>
        </div>
    </div>

    
        <br></br>
          <Footer />
        </>
      );
    }
  }
             
  export default ReviewPage;