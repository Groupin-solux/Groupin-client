import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/BoardWritePage.css';
import { Link } from 'react-router-dom';

class ReviewBoardWritePage extends Component {
    render() {
      return (
        <>
          <Header />

    <div class="board_wrap">
        <div class="board_title">
            <strong>후기 작성하기</strong>
        </div>
        <div class="board_write_wrap">
            <div class="board_write">
                <div class="title">
                    <dl>
                        <dt>후기 제목</dt>
                        <dd><input type="text" placeholder="제목 입력"></input></dd>
                    </dl>
                </div>
                <div class="place">
                    <dl>
                        <dt>모임 이름</dt>
                        <dd><input type="text" placeholder="모임 입력"></input></dd>
                    </dl>
                </div>
                <div class="info">
                    <dl>
                        <dt>작성 날짜</dt>
                        <dd><input type="text" placeholder="날짜 입력"></input></dd>
                    </dl>
                </div>
                <div class="cont">
                    <dl>
                    <dt>내용</dt>
                    <textarea cols="50" rows="10" placeholder="내용 입력"></textarea>
                    </dl>
                </div>
                </div>
                </div>
            </div>
            <div class="bt_wrap">
                <Link to="/reviewboard" style={{ textDecoration: 'none' }}><a class="on">글 작성하기</a></Link>
                <Link to="/reviewboard" style={{ textDecoration: 'none' }}><a class="on">Back</a></Link>
            </div>
    
        <br></br>
          <Footer />
        </>
      );
    }
  }
             
  export default ReviewBoardWritePage;