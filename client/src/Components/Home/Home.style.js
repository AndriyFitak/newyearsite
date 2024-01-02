
import styled from 'styled-components';
export const HomeContainer = styled.div`
  height: 2800px;
  text-align: center;
  position: relative;
`;

export const Header = styled.div`
  display:flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  z-index: 2000;
`;

export const Nav = styled.nav`
  width: 100%;

`;

export const ImageContainer = styled.div`
  position: relative;
  margin-top: -50px;

  img {
    width: 100%;
    height: 1000px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0));
    filter: blur(0.1px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    filter: blur(0.1px);
  }
`;

export const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const ImageMountainsHome = styled.div`
  position: relative;
  margin-top: -50px;

  img {
    width: 100%;
    height: 1000px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0));
    filter: blur(0.1px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    filter: blur(0.1px);
  }
`;

export const ImgBlock = styled.div`
  width: 80%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  margin-left: 10%;
  margin-top: -800px;
`;

export const ImgInfo = styled.div`
  position: relative;
  margin-top: 20px;
  p{
    color:white; 
   }
  img {
    width: 350px;
    height: 600px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const ImgBlockHover = styled.div`
  width: 67%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  margin-left: 30%;
  margin-top: -800px;
  transition: transform 0.3s ease-in-out;
`;

export const ImgInfoHover = styled.div`
  img {
    width: 300px;
    height: 600px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  p{
    color:white; 
   }
  &:hover img {
    transform: scale(1.05);
  }
`;

export const ImgCaption = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const TextInfoBlock = styled.div`
  width: 150px;
`;

export const TextH2 = styled.h2`
  position: absolute;
  margin-top: -50%;
  margin-left: 40px;
  color: white;
`;

export const TextP = styled.p`
  width: 200px;
  color: white;
  margin-top: -45%;
  margin-left: 30px;
  position: absolute;
`;
export const ImgHoverP = styled.p`
  color: white;
`
