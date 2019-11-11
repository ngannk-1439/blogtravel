/* eslint-disable no-unused-vars */
import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { colors } from '../../global-styles';

import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  &.ant-layout-footer {
    background: ${colors.primaryColor};
    color: ${colors.whiteColor};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function MainFooter() {
  return (
    <StyledFooter>@Build by Sun* Up</StyledFooter>
  );
}

export default MainFooter;
