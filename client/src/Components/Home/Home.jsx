// Home.jsx

import React from 'react';
import HomeImg from "../../images/HomeImg.jpg";
import MountainsImg from "../../images/HomeMountainImg.jpg";
import ForestImg from "../../images/forestImg.png";
import ImgInfo1 from "../../images/imgInfo1.jpg";
import ImgInfo2 from "../../images/imgInfo2.webp";
import ImgInfo3 from "../../images/imgInfo3.webp";
import HoverImg1 from "../../images/HoverImg1.jpg"
import HoverImg2 from "../../images/HoverImg2.avif"
import HoverImg3 from "../../images/HoverImg3.png"
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#expeditions">Expeditions</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
      <div className="image-container">
        <img src={HomeImg} alt="" />
        <div className="image-text">
          <h2>Adventure awaits within</h2>
          <button>To adventures</button>
        </div>
      </div>
      <div className='image-mountains-home'>
        <img src={MountainsImg} alt="" />
        <div className='img-block'>
        <div className="img-info">
          <img src={ImgInfo1} alt="Info Image 1" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Mountains</p>
        </div>
        <div className="img-info">
          <img src={ImgInfo2} alt="Info Image 2" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Cave</p>
        </div>
        <div className="img-info">
          <img src={ImgInfo3} alt="Info Image 3" />
          <p className="img-caption" style={{ fontSize: '30px' }}>River</p>
        </div>
        </div>
      </div>
      <div className='image-mountains-home'>
        <img src={ForestImg} alt=""/>
        <div className='img-block'>
        <div className="img-info">
          <img src={HoverImg1} alt="Info Image 1" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Mountains</p>
        </div>
        <div className="img-info">
          <img src={HoverImg2} alt="Info Image 2" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Cave</p>
        </div>
        <div className="img-info">
          <img src={HoverImg3} alt="Info Image 3" />
          <p className="img-caption" style={{ fontSize: '30px' }}>River</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
