/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { colors } from '../../global-styles';

import { Layout, Menu, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;

const Logo = styled.div`
  font-weight: 700;
  font-size: 30px;

  &:first-letter {
    color: ${colors.primaryColor};
  }
`;

const StyledHeader = styled(Header)`
  background: ${colors.whiteColor} !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenu = styled(Menu)`
  &.ant-menu-horizontal {
    background: transparent;
    margin-left: 30px;
    border-bottom: none;

    .ant-menu-item {
      top: 0;
      margin-top: 0;
      border-bottom: none;
    }
    .ant-menu-item-selected,
    .ant-menu-item:hover {
      color: ${colors.primaryColor};
      border-bottom: none;
    }
  }
`;

const StyledSearch = styled(Search)`
  .ant-input {
    &:hover {
      border-color: ${colors.primaryColor};
    }

    &:focus {
      border-color: ${colors.primaryColor};
      box-shadow: none;
    }
  }
`;

function MainHeader() {
  return (
    <Layout>
      <StyledHeader>
        <Logo>TRAVEL</Logo>
        <StyledMenu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Việt Nam</Menu.Item>
          <Menu.Item key="2">Châu Á</Menu.Item>
          <Menu.Item key="3">Châu Âu</Menu.Item>
          <Menu.Item key="4">Châu Úc</Menu.Item>
          <Menu.Item key="5">Châu Mỹ</Menu.Item>
        </StyledMenu>
        <StyledSearch
          placeholder="Tìm kiếm tại đây..."
          style={{ width: 200, height: 30 }}
        />
      </StyledHeader>
    </Layout>
  )
}

export default MainHeader;
