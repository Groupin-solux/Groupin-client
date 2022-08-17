import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentList from '../components/User/ContentList';
import MyProfile from '../components/User/MyProfile';
import '../CSS/MyPage.css';


class MyPage extends Component {
    render() {
      return (
        <>
          <Header />
          <div className='form'>
            <MyProfile level="GOLD" point="37"/>
          </div>
          <div className='con'>
            <ContentList title="모임 관리" text1="디즈니 플러스 완다비전 달리는 방"
            text2="연남동 카페 투어 모임"
            text3="아이스크림이 땡기는 날"
            text4="야구 보러 가실 분~"/>
            <br></br>
            <ContentList title="신청 목록" text1="디즈니 플러스 완다비전 달리는 방"
            text2="연남동 카페 투어 모임"
            text3="아이스크림이 땡기는 날"
            text4="야구 보러 가실 분~"/>
            <br></br>
            <ContentList title="댓글 단 글" text1="디즈니 플러스 완다비전 달리는 방"
            text2="연남동 카페 투어 모임"
            text3="아이스크림이 땡기는 날"
            text4="야구 보러 가실 분~"/>
          </div>
          <Footer />
        </>
      );
    }
  }
             
  export default MyPage;