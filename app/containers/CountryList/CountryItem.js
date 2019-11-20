/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'antd/dist/antd.css';
import { StyledMenu, StyledMenuItem } from '../../containers/Header/StyledHeader';

import { Menu } from 'antd';

const { SubMenu } = Menu;

export default ({country}) => {
  const countryitem = country.country_name;
  return (
    <StyledMenu
      mode="horizontal"
    >
      <SubMenu
        key={country.id}
        title={
          <span>
            <span>{country.continent_name}</span>
          </span>
        }
      >
        {countryitem.map((item, index) => 
          <StyledMenuItem key={index}>
            <a href="#">{item}</a>
          </StyledMenuItem>
        )}
      </SubMenu>
    </StyledMenu>
  )
}
