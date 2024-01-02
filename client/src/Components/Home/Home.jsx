// Home.jsx
import React, { useState } from 'react';

import HomeImg from "../../images/HomeImg.jpg";
import ShopImg from "../../images/ShopImg.jpg";
import HappyImg from "../../images/HappyImg.jpg";
import ImgInfo1 from "../../images/imgInfo1.jpg";
import ImgInfo2 from "../../images/imgInfo2.jpg";
import ImgInfo3 from "../../images/imgInfo3.jpg";
import HoverImg1 from "../../images/HoverImg1.jpg"
import HoverImg2 from "../../images/HoverImg2.jpg"
import HoverImg3 from "../../images/HoverImg3.jpg"
import {  
  HomeContainer,
  Header,
  Nav,
  ImageContainer,
  ImageText,
  ImageMountainsHome,
  ImgBlock,
  ImgInfo,
  ImgBlockHover,
  ImgInfoHover,
  // ImgCaption,
  TextInfoBlock,
  TextH2,
  TextP,
} from './Home.style';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageClickHandler = (title, description) => {
    setSelectedImage({ title, description });
  };

  return (
    <HomeContainer>
      <Header>
        <Nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#fair">Fair</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <ImageContainer>
        <img src={HomeImg} alt="" />
        <ImageText>
          <h2>New Years fair</h2>
          <button>To the fair</button>
        </ImageText>
      </ImageContainer>
      <ImageMountainsHome>
        <img src={ShopImg} alt="" />
        <ImgBlock>
          <ImgInfo>
            <img src={ImgInfo1} alt="InfoImage1" />
            <p className="img-caption" style={{ fontSize: '30px' }}>
              New Year Toys
            </p>
          </ImgInfo>
          <ImgInfo>
            <img src={ImgInfo2} alt="InfoImage2" />
            <p className="img-caption" style={{ fontSize: '30px' }}>
              Beautiful pictures
            </p>
          </ImgInfo>
          <ImgInfo>
            <img src={ImgInfo3} alt="InfoImage3" />
            <p className="img-caption" style={{ fontSize: '30px' }}>
              Childrens toys
            </p>
          </ImgInfo>
        </ImgBlock>
      </ImageMountainsHome>
      <ImageMountainsHome>
        <img src={HappyImg} alt="" />
        <TextInfoBlock>
          <TextH2>
            {selectedImage ? selectedImage.title : 'Vyshyvanka'}
          </TextH2>
          <div className="BlockPInfo">
            <TextP>
              {selectedImage
                ? selectedImage.description
                : 'The Ukrainian vyshyvanka is a traditional embroidered blouse, renowned for its vibrant colors and intricate patterns. Worn with pride, it is a symbol of Ukraines rich cultural heritage and craftsmanship. Each vyshyvanka tells a unique story, with regional variations reflecting diverse traditions and beliefs. Beyond its aesthetic appeal, the vyshyvanka embodies a sense of identity, unity, and national pride, making it a cherished attire for celebratory occasions and a testament to the enduring legacy of Ukrainian artistry.'}
            </TextP>
          </div>
        </TextInfoBlock>
        <ImgBlockHover> 
          <ImgInfoHover
            onClick={() =>
              imageClickHandler(
                'Vyshyvanka',
                'The Ukrainian vyshyvanka is a traditional embroidered blouse, renowned for its vibrant colors and intricate patterns. Worn with pride, it is a symbol of Ukraines rich cultural heritage and craftsmanship. Each vyshyvanka tells a unique story, with regional variations reflecting diverse traditions and beliefs. Beyond its aesthetic appeal, the vyshyvanka embodies a sense of identity, unity, and national pride, making it a cherished attire for celebratory occasions and a testament to the enduring legacy of Ukrainian artistry.'
              )
            }
          >
            <img src={HoverImg1} alt="InfoImage1" />
            <p className="img-caption-hover" style={{ fontSize: '30px' }}>
              Vyshyvanka
            </p>
          </ImgInfoHover>
          <ImgInfoHover
            onClick={() =>
              imageClickHandler(
                'Dishes for Christmas Eve',
                'Ukrainian Christmas Eve, known as Sviat Vechir, is a cherished and festive tradition celebrated on the evening of December 24th. Families gather around a table adorned with a symbolic embroidered cloth, known as a rushnyk, to share a 12-dish meatless meal, featuring traditional dishes like kutia, borscht, and varenyky. The evening is marked by the singing of carols, the lighting of candles, and the sharing of special rituals, including the breaking of the Christmas bread, or kolach.'
              )
            }
          >
            <img src={HoverImg2} alt="InfoImage2" />
            <p className="img-caption-hover" style={{ fontSize: '30px' }}>
              Dishes for Christmas Eve
            </p>
          </ImgInfoHover>
          <ImgInfoHover
            onClick={() =>
              imageClickHandler(
                'Christmas carol',
                'The Ukrainian carol, known as kolyadka, is a heartfelt and melodious traditional song sung during the Christmas season. Passed down through generations, kolyadky hold deep cultural significance, often performed by groups of carolers who visit homes to spread festive cheer. These songs convey messages of joy, peace, and goodwill, celebrating the birth of Christ and sharing the spirit of the holiday season. With their lively tunes and meaningful lyrics, kolyadky evoke a sense of warmth, community'
              )
            }
          >
            <img src={HoverImg3} alt="InfoImage3" />
            <p className="img-caption-hover" style={{ fontSize: '30px'  }}>
              Christmas carol
            </p>
          </ImgInfoHover>
        </ImgBlockHover>
      </ImageMountainsHome>
    </HomeContainer>
  );
}

export default Home;
