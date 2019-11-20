import styled from 'styled-components';
import { colors } from '../../global-styles';
// import 'antd/dist/antd.css';

import { Layout, Menu, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;
// const { SubMenu } = Menu;

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
  height: auto;
  line-height: normal;
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

const StyledMenu = styled(Menu)`
  &.ant-menu-horizontal {
    background: transparent;
    margin-left: 30px;
    border-bottom: none;
    display: inline-block;

    .ant-menu-item-selected,
    .ant-menu-item:hover {
      color: ${colors.primaryColor};
      border-bottom: none;
    }

    .ant-menu-submenu:hover,
    .ant-menu-submenu-title:hover {
      color: ${colors.primaryColor};
    }

    .ant-menu-submenu:hover,
    .ant-menu-submenu-open {
      border-bottom: 2px solid ${colors.primaryColor};
    }

    .ant-menu-submenu-open {
      color: ${colors.primaryColor} !important;
    }
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  &.ant-menu-item {
    top: 0;
    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
      border-bottom: 1px solid #eee;
    }

    a:hover,
    &:hover,
    &-active {
      color: ${colors.primaryColor};
    }

    &:active {
      background: ${colors.primaryColor};
      color: ${colors.whiteColor};
    }

    > a:hover {
      color: ${colors.primaryColor};
    }
  }
`;

export {
  Logo,
  StyledHeader,
  StyledSearch,
  StyledMenu,
  StyledMenuItem
};
