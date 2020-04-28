import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { StyledMenu, StyledMenuItem } from 'containers/Header/StyledHeader';

import { Menu } from 'antd';

const { SubMenu } = Menu;

const CountryItem = ({country}) => {
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

CountryItem.propTypes = {
  country: PropTypes.object,
}

export default CountryItem;
