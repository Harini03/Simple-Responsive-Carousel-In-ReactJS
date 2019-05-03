import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import imageLoader from './image-loader.gif';

const CarouselSlide = ({ homePage, slideWidth, showSlide }) => (
  <Slide className="" width={slideWidth} showSlide={showSlide}>
    <Image src={homePage.webformatURL} alt={homePage.tags} />
    <Caption>{homePage.tags}</Caption>
  </Slide>
);

CarouselSlide.propTypes = {
  homePage: PropTypes.object,
  slideWidth: PropTypes.number,
  showSlide: PropTypes.bool
};

export default CarouselSlide;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: transparent url(${imageLoader}) center no-repeat;
  @media only screen and (max-width: 767px){
    object-fit: cover;
  }
`;

const Slide = styled.div`
  width: ${(props) => props.width}%;
  display: none;
  float: left;
  position: relative;
  margin: 1%;
  ${(props) => props.showSlide
    && `display: inline-block;
    `
};
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;

  @media only screen and (max-width: 767px){
    height: 25rem;
  }
  @media only screen and (max-width: 479px){
    height: 12rem;
  }
  @-webkit-keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }
`;
const Caption = styled.div`
  color: #333333;
  font-size: 15px;
  padding: 8px 12px;
  width: 100%;
  text-align: center;
`;
