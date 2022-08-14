import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import MainCard from './components/MainCard';
import './Home.css';


class Home extends Component {
    render() {
      return (
        <>
          <Header />

      <div id="container">
        <div id="body-content">
          <MainContent/>
        </div>
      </div>

      <div class="cardmain">
        <MainCard category="스포츠" content="누구나 쉽게 즐길 수 있는 테니스 모임"/>
      </div>
      <div class="cardmain">
        <MainCard category="공예/만들기" content="간단한 비즈공예 만들기 모임"/>
      </div>
      <div class="cardmain">
        <MainCard category="문화" content="문화생활 즐겨요! 뮤지컬 관람 모임"/>
      </div>
      <div class="cardmain">
        <MainCard category="오락" content="동네에서 만나는 보드게임 카페 모임"/>
      </div>
      <div class="cardmain">
        <MainCard category="여행" content="한강 나들이 가실 분~! 한강 치맥 모임"/>
      </div>
        <br></br>
          <Footer />
        </>
      );
    }
  }
             
  export default Home;