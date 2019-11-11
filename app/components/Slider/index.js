/* eslint-disable no-unused-vars */
import React from 'react';

import { Carousel } from 'antd';

import 'antd/dist/antd.css';
import styled from 'styled-components';

const StyledSlider = styled(Carousel)`
  .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;

    h3 {
      color: #fff;
    }
  }
`;

function Slider() {
  return (
    <StyledSlider autoplay>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </StyledSlider>
  )
}

export default Slider;
