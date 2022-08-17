import './Login.css';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import axios from "axios";

class BoardTest extends Component {
    state = {
      title: "",
      region: "",
      max_participants: "",
      recommend: "",
      group_info: "",
      group_notice: "",

    };
    onTitleChange = e => {
      this.setState({
        title: e.target.value
      });
    };
    onRegionChange = e => {
      this.setState({
        region: e.target.value
      });
    };
    onGroup_infoChange = e => {
      this.setState({
        group_info: e.target.value
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      const data = {
        title: this.state.title,
        region: this.state.region,     
        group_info: this.state.group_info,  
      };
      axios
        .post("https://groupin-songpyeon.herokuapp.com/sports/write", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
          <>
        <div className="post">
          <form className="post" onSubmit={this.handleSubmit}>
            <input
              placeholder="title" value={this.state.title}
              onChange={this.onTitleChange} required
            />
             <textarea
              placeholder="region" value={this.state.region}
              onChange={this.onRegionChange} required
            />
            <textarea
              placeholder="group_info" value={this.state.group_info}
              onChange={this.onGroup_infoChange} required
            />
            <button type="submit">Create Post</button>
          </form>
        </div>
        <div>
        <div class="board_wrap">
        <div class="board_title">
            <strong>스포츠 게시판</strong>
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
                    <div class="num">5</div>
                    <div class="title"><Link to="/viewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title"><Link to="/viewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title"><Link to="/viewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><Link to="/viewpage">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><Link to="/viewpage">글 제목이 들어갑니다.</Link></div>
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
                <Link to="/boardwritepage"><span class="on">글쓰기</span></Link>
                
                <a href="#">검색</a>
            </div>
        </div>
    </div>
        </div>
        
      </>
      );
    }
  }
  
export default BoardTest;