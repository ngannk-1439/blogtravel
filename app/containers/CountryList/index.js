import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import reducer from './reducer';

import useInjectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

import CountryItem from './CountryItem';

import {
  makeSelectCountry,
  makeSelectCountriesLoading,
  makeSelectCountriesError,
} from './selectors';

const key = 'CountryList';

function CountryList(props) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  let countryListContent = <div />;
  const allcountry = Array.from(props.countries); 

  // Merged country have same continents
  let continents = allcountry
    .map((item) => item.continent_name)
    .filter((item, i, arr) => arr.indexOf(item) === i)
    .map((item, i) => {
      let merged_country = allcountry
        .filter(citem => citem.continent_name == item)
        .map(citem => {
          return {countryId: citem.id, countryName: citem.country_name}
        });
      let continentId = i + 1;
    return {continentId: continentId, continent_name: item, countries: merged_country}
  });

  if(continents) {
    countryListContent = continents.map(country => (
      <CountryItem key={country.continentId} country={country} />
    ));
  } else {
    <div>List danh sách đang trống</div>
  }

  return (
    <div>{countryListContent}</div>
  )
}

CountryList.propTypes = {
  countries: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
}

const mapStateToProps = createStructuredSelector({
  countries: makeSelectCountry(),
  loading: makeSelectCountriesLoading(),
  error: makeSelectCountriesError(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withSaga = useInjectSaga({ key, saga, mode: DAEMON });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  withSaga
)(CountryList);
