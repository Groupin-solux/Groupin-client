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
                    <div class="num">5</div>
                    <div class="title"><Link to="/reviewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title"><Link to="/reviewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title"><Link to="/reviewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><Link to="/reviewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><Link to="/reviewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
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