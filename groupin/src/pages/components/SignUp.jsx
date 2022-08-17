import './Login.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
    state = {
      id: "",
      password: "",
      nickname: "",
      email: "",
      region: 1,
    };
    onIdChange = e => {
      this.setState({
        id: e.target.value
      });
    };
    onPWChange = e => {
        this.setState({
          password: e.target.value
        });
      };
      onNNChange = e => {
        this.setState({
          nickname: e.target.value
        });
      };
      onEMChange = e => {
        this.setState({
          email: e.target.value
        });
      };
    onRegionChange = e => {
      this.setState({
        region: e.target.value
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        id: this.state.id,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
        region: this.state.region,     
      };
      axios
        .post("https://groupin-songpyeon.herokuapp.com/auth/signup", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
  
    render() {
    return (
        <>
        <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="id" value={this.state.id}
            onChange={this.onIdChange} required
          />
           <textarea
            placeholder="password" value={this.state.password}
            onChange={this.onPWChange} required
          />
           <textarea
            placeholder="nickname" value={this.state.nickname}
            onChange={this.onNNChange} required
          />
           <textarea
            placeholder="email" value={this.state.email}
            onChange={this.onEMChange} required
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
        <div className='login-form'>
            <strong>회원가입</strong>
            <form>
                <input type="email" name="email" class="text-field" placeholder="ID"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="password" name="password" class="text-field" placeholder="PW"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="text" name="nickname" class="text-field" placeholder="nickname"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="email" name="e-mail" class="text-field" placeholder="E-mail"></input>
                <br></br>
                <br></br>
            </form>

            <form class="text-field">
            <input type="radio" name="place" checked="checked" value="수도권" />서울/경기/인천/강원
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상남도" />부산/울산/경남
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="경상북도" />대구/경북
            <br></br>
            <input type="radio" name="place" value="충청도" />대전/충청
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="전라도" />광주/전라
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="place" value="제주도" />제주
            </form>
            
            <br></br>

            <form>
            <input type="file" class="text-field" accept="image/*,.txt" multiple required capture='user' onchange='aaa'/> 
            </form>

            <br></br>

            <Link to = "/mypage"><Button text="회원가입"/></Link>
        </div>
        </>
    );
    }
};

export default SignUp;