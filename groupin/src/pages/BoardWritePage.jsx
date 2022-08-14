import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './BoardWritePage.css';
import { Link } from 'react-router-dom';

class BoardWritePage extends Component {
    render() {
      return (
        <>
          <Header />

    <div class="board_wrap">
        <div class="board_title">
            <strong>글 작성하기</strong>
        </div>
        <div class="board_write_wrap">
            <div class="board_write">
                <div class="title">
                    <dl>
                        <dt>글 제목</dt>
                        <dd><input type="text" placeholder="제목 입력"></input></dd>
                    </dl>
                </div>
                <div class="place">
                    <dl>
                        <dt>희망 장소</dt>
                        <dd><input type="text" placeholder="지역 입력"></input></dd>
                    </dl>
                </div>
                <div class="info">
                    <dl>
                        <dt>모집인원</dt>
                        <dd><input type="text" placeholder="인원수 입력"></input></dd>
                    </dl>
                </div>
                <div class="cont">
                    <dl>
                    <dt>세부 내용</dt>
                    <textarea cols="50" rows="10" placeholder="내용 입력"></textarea>
                    </dl>
                </div>
                </div>
                </div>
            </div>
            <div class="bt_wrap">
                <Link to="/" style={{ textDecoration: 'none' }}><a class="on">글 작성하기</a></Link>
                <Link to="/" style={{ textDecoration: 'none' }}><a class="on">Back</a></Link>
            </div>
    
        <br></br>
          <Footer />
        </>
      );
    }
  }
             
  export default BoardWritePage;