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
            <ContentList title="신청 목록" text1="필라테스 그룹 레슨 같이 받으실 분 구해요!"
            text2="주말에 무비올나잇 달리실 분~"
            text3="중랑천 런닝 모임 구함"
            text4="넷플릭스 팟 모집"/>
            <br></br>
            <ContentList title="댓글 단 글" text1="디즈니 플러스 완다비전 달리는 방"
            text2="주말에 무비올나잇 달리실 분~"
            text3="중랑천 런닝 모임 구함"
            text4="디즈니 플러스 완다비전 달리는 방"/>
          </div>
          <Footer />
        </>
      );
    }
  }
             
  export default MyPage;