/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { StyledMenu, StyledMenuItem } from '../../containers/Header/StyledHeader';

import { Menu } from 'antd';

const { SubMenu } = Menu;

function CountryArticle({ match }) {
  return (
    <div>Id: {match.params.countryId}</div>
  )
}

export default ({country}) => {
  const countryitem = country.countries;
  return (
    <StyledMenu
      mode="horizontal"
    >
      <SubMenu
        key={country.id}
        title={
          <span>{country.continent_name}</span>
        }
      >
        {countryitem.map((item, index) => 
          <StyledMenuItem key={index}>
            <Link to={`/countries/${item.countryId}`}>{item.countryId} - {item.countryName}</Link>
            {/* <a href="#">{item.countryId} - {item.countryName}</a> */}
          </StyledMenuItem>
        )}
      </SubMenu>
    </StyledMenu>
      // <Route patch='/countries/:countryId' component={CountryArticle}></Route>
  )
}
