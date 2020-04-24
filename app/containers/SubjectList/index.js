/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { colors } from '../../global-styles';
import {  Menu } from 'antd';

const StyledMenu = styled(Menu)`
  background: ${colors.whiteColor};
  .ant-menu-item {
    &:hover {
      color: ${colors.primaryColor} !important;
    }
  }
  .ant-menu-item-selected {
    background: ${colors.whiteColor} !important;
    color: ${colors.primaryColor} !important;
    &:after {
      opacity: 0;
    }
    &.nav-text {
      text-transform: uppercase;
    }
  }
  
`;

export default function SubjectList() {
  return (
    <React.Fragment>
      <StyledMenu theme="light" mode="inline" defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <span className="nav-text">ẨM THỰC</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span className="nav-text">BỐN PHƯƠNG</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="nav-text">KHÁM PHÁ</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span className="nav-text">TOUR</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span className="nav-text">GIẢI TRÍ</span>
        </Menu.Item>
      </StyledMenu>
    </React.Fragment>
  );
}
