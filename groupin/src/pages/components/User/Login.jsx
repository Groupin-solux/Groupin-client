import { Link } from 'react-router-dom';
import '../CSS/Login.css';
import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    
    state = {
      id: "",
      password: "",
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


    handleSubmit = e => {
      e.preventDefault();
      const data = {
        id: this.state.id,
        password: this.state.password,
     
      };

      var bodyFormData = new FormData();
      bodyFormData.append('email', "배지윤")
      bodyFormData.append('password', "배지윤PW")

      axios({
        method: "post",
        url: "https://groupin-songpyeon.herokuapp.com/auth/signin",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
        maxRedirects: 0
      })
        .then(res => console.log(res), console.log("-----------성공-----------"))
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


          <button type="submit">Create Post</button>
        </form>
      </div>
        <div className='login-form'>
            <form>
                <input type="email" name="email" class="text-field" placeholder="ID"></input>
                <br></br>
                <br></br>
            </form>
            <form>
                <input type="password" name="password" class="text-field" placeholder="PW"></input>
                <br></br>
                <br></br>
                <Link to="/mypage"><input type="submit" value="LOGIN" class="submit-btn"></input></Link>
                <hr></hr>
            </form>
            <div class="links">
                <Link to="/signuppage"><span>SIGNUP</span></Link>
            </div>

            
            
        </div></>
    );
    }
};

export default Login;