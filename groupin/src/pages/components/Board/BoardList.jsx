import React, { useState, useEffect } from 'react';
import '../CSS/BoardCss.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BoardList = () => {
    const [testList, setTestList] = useState([]);

    useEffect(() => {
        axios
            .get("https://groupin-songpyeon.herokuapp.com/sports/list")
            .then((response) => {
                setTestList([response.data])
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    return (
        <>
            {
                testList.map(post => {
                    return (
                        <span className='category'>
                            <div>
                                <div class="board_wrap">
                                    <div class="board_title">
                                        <strong>{post.category} 게시판</strong>
                                        <p>모임을 만들어보세요!</p>
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
                                                <div class="num">7</div>
                                                <div class="title"><Link to="/viewpage">{post[6].title}</Link></div>
                                                <div class="writer">{post[6].user.id}</div>
                                                <div class="date">{post[6].createdAt[0]}.{post[6].createdAt[1]}.{post[6].createdAt[2]}</div>
                                                <div class="count">{post[6].views}</div>
                                            </div>
                                            <div>
                                                <div class="num">6</div>
                                                <div class="title"><Link to="/viewpage">{post[3].title}</Link></div>
                                                <div class="writer">{post[3].user.id}</div>
                                                <div class="date">{post[3].createdAt[0]}.{post[3].createdAt[1]}.{post[3].createdAt[2]}</div>
                                                <div class="count">{post[3].views}</div>
                                            </div>
                                            <div>
                                                <div class="num">3</div>
                                                <div class="title"><Link to="/viewpage">{post[2].title}</Link></div>
                                                <div class="writer">{post[2].user.id}</div>
                                                <div class="date">{post[2].createdAt[0]}.{post[2].createdAt[1]}.{post[2].createdAt[2]}</div>
                                                <div class="count">{post[2].views}</div>
                                            </div>
                                            <div>
                                                <div class="num">2</div>
                                                <div class="title"><Link to="/viewpage">{post[1].title}</Link></div>
                                                <div class="writer">{post[1].user.id}</div>
                                                <div class="date">{post[1].createdAt[0]}.{post[1].createdAt[1]}.{post[1].createdAt[2]}</div>
                                                <div class="count">{post[1].views}</div>
                                            </div>
                                            <div>
                                                <div class="num">1</div>
                                                <div class="title"><Link to="/viewpage">{post[0].title}</Link></div>
                                                <div class="writer">{post[0].user.id}</div>
                                                <div class="date">{post[0].createdAt[0]}.{post[0].createdAt[1]}.{post[0].createdAt[2]}</div>
                                                <div class="count">{post[0].views}</div>
                                            </div>
                                            {/* 
            for (let i = 0; i < post.length; i++) {
                const result = [];
                <div>
                <div class="num">{{i}}</div>
                    <div class="title"><Link to="/viewpage">{post[i].title}</Link></div>
                    <div class="writer">{post[i].user.id}</div>
                    <div class="date">{post[i].createdAt[0]}.{post[i].createdAt[1]}.{post[i].createdAt[2]}</div>
                    <div class="count">{post[i].views}</div>
                </div>
            } */}
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
                                            <Link to="/boardwritepage"><span class="on">글쓰기</span></Link>

                                            <a href="#">검색</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    )
                })
            }
        </>
    );
};

export default BoardList;

