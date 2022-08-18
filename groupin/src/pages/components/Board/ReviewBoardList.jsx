import React from 'react';
import '../CSS/BoardCss.css';
import { Link } from 'react-router-dom';

const BoardList = ({ title }) => {
    return (
        <div>
        <div class="board_wrap">
        <div class="board_title">
            <strong>{title} 게시판</strong>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>
                <div>
                    <div class="num">15</div>
                    <div class="title"><Link to="/reviewpage">야구 모임 후기 1탄</Link></div>
                    <div class="writer">groupin</div>
                    <div class="date">2022.8.18</div>
                    <div class="count">32</div>
                </div>
                <div>
                    <div class="num">14</div>
                    <div class="title"><Link to="/reviewpage">즐거웠던 자전거 모임</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2022.8.15</div>
                    <div class="count">3</div>
                </div>
                <div>
                    <div class="num">13</div>
                    <div class="title"><Link to="/reviewpage">아이스크림이 땡기는 날</Link></div>
                    <div class="writer">지윤</div>
                    <div class="date">2022.8.15</div>
                    <div class="count">133</div>
                </div>
                <div>
                    <div class="num">12</div>
                    <div class="title"><Link to="/reviewpage">8월 모각코 후기</Link></div>
                    <div class="writer">개발왕이될거야</div>
                    <div class="date">2022.8.14</div>
                    <div class="count">21</div>
                </div>
                <div>
                    <div class="num">11</div>
                    <div class="title"><Link to="/reviewpage">무비올나잇 후기 남겨요~!</Link></div>
                    <div class="writer">광광</div>
                    <div class="date">2022.7.25</div>
                    <div class="count">31</div>
                </div>
            </div>
            <div class="board_page">
                <a href="#" class="bt prev">-</a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next">-</a>

                <div>
                <br></br>
                <input type="text" placeholder="검색어를 입력해주세요." class="search"></input></div>
            </div>
            
            <div class="bt_wrap">
                <Link to="/reviewboardwritepage"><a class="on">글쓰기</a></Link>
                
                <a href="#">검색</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default BoardList;