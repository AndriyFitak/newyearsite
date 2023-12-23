// Home.jsx

import React, { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const imageClickHandler = (title, description) => {
    setSelectedImage({ title, description });
  };
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
          <img src={ImgInfo1} alt="InfoImage1" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Mountains</p>
        </div>
        <div className="img-info">
          <img src={ImgInfo2} alt="InfoImage2" />
          <p className="img-caption" style={{ fontSize: '30px' }}>Cave</p>
        </div>
        <div className="img-info">
          <img src={ImgInfo3} alt="InfoImage3" />
          <p className="img-caption" style={{ fontSize: '30px' }}>River</p>
        </div>
        </div>
      </div>
      <div className='image-mountains-home'>
        <img src={ForestImg} alt=""/> 
        <div className='textInfoBlock'>
            <h2 className='textH2'>{selectedImage ? selectedImage.title : 'Everest'}</h2>
            <div className='BlockPInfo'>
              <p className='textP'>{selectedImage ? selectedImage.description : 'Mount Everest, the worlds highest peak at 29,032 feet (8,848 meters), stands majestically in the Himalayas on the Nepal-Tibet border. A symbol of awe-inspiring natural beauty and an enduring challenge for climbers, Everests summit beckons adventurers from across the globe. The trek to its pinnacle is a grueling test of strength, courage, and determination, offering an unparalleled experience against the breathtaking backdrop of the worlds tallest peaks.'}</p>
            </div>
        </div>
        <div className='img-block-hover'>
          <div className="img-info-hover" onClick={() => imageClickHandler('Everest', 'Mount Everest, the worlds highest peak at 29,032 feet (8,848 meters), stands majestically in the Himalayas on the Nepal-Tibet border. A symbol of awe-inspiring natural beauty and an enduring challenge for climbers, Everests summit beckons adventurers from across the globe. The trek to its pinnacle is a grueling test of strength, courage, and determination, offering an unparalleled experience against the breathtaking backdrop of the worlds tallest peaks.')}>
            <img src={HoverImg1} alt="InfoImage1" />
            <p className="img-caption-hover" style={{ fontSize: '30px' }}>Everest</p>
          </div>
          <div className="img-info-hover" onClick={() => imageClickHandler('Amazonka', 'The Amazon River, spanning over 4,000 miles (6,400 kilometers) through South America, is the second-longest river globally, surpassed only by the Nile. It winds its way through the heart of the Amazon rainforest, the largest tropical rainforest on Earth, and is home to an extraordinary array of biodiversity. The river serves as a lifeblood for countless species and communities, offering a vital ecosystem and playing a crucial role in maintaining the planets ecological balance.')}>
            <img src={HoverImg2} alt="InfoImage2" />
            <p className="img-caption-hover" style={{ fontSize: '30px' }}>Amazonka</p>
          </div>
          <div className="img-info-hover" onClick={() => imageClickHandler('Cave is optimistic', 'Optimistichna Cave, situated in the Ternopil region of Ukraine, stands as a geological marvel and a national natural monument of significant importance. Nestled within the picturesque Chortkiv district, to the southwest of the charming village of Korolivka, this extraordinary cave is enveloped by the scenic Korolivka forest tract. Notably, Optimistichna Cave has earned its place in the Guinness Book of Records as the worlds longest gypsum cave, adding to its allure as a captivating .')}>
            <img src={HoverImg3} alt="InfoImage3"/>
            <p className="img-caption-hover" style={{ fontSize: '30px' }}>Cave is optimistic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
