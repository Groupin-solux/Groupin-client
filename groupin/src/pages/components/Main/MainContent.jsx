import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/MainContent.css';

function MainContent() {
  return (
    <>
      <div id="container">
      <Carousel variant="dark">
        <Carousel.Item className="card-content">
          <Link to = "/">
          <img
            className="d-block"
            src="img/pilates.png"
            style={{height : 300,}}   
            alt="First slide"
          />
          </Link>
        </Carousel.Item>
        <Carousel.Item className="card-content">
          <Link to = "/">
          <img
            className="d-block"
            src="img/baking.png"
            style={{height : 300}}   
            alt="Second slide"
          />
          </Link>
        </Carousel.Item>
      </Carousel>
      </div>
    </>

  );
}

export default MainContent;