/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';

import { Layout } from 'antd';

import CountryList from 'containers/CountryList';
import { Logo, StyledHeader, StyledSearch } from './StyledHeader';

function MainHeader() {
  return (
    <Layout>
      <StyledHeader>
        <Logo>TRAVEL</Logo>
        <CountryList />
        <StyledSearch
          placeholder="Tìm kiếm tại đây..."
          style={{ width: 200, height: 30 }}
        />
      </StyledHeader>
    </Layout>
  )
}

export default MainHeader;
