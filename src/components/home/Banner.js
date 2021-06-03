import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Banner() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/banner1.jpg" alt="banner1" />
      </Wrap>
      <Wrap>
        <img src="/images/banner2.jpg" alt="banner2" />
      </Wrap>
      <Wrap>
        <img src="/images/banner3.jpg" alt="banner3" />
      </Wrap>
    </Carousel>
  );
}

export default Banner;
const Carousel = styled(Slider)`
  margin-top: 80px;
  margin-bottom:50px;
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Wrap = styled.div`
  justify-content: center;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 440px;
    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  }
`;
