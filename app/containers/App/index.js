/* eslint-disable no-unused-vars */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import MainHeader from 'containers/Header';
import MainFooter from 'containers/Footer';
import MainContent from 'containers/Content';
import Slider from 'components/Slider';

import { GlobalStyle } from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
`;


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Blog Travel React"
        defaultTitle="Blog Travel React"
      >
        <meta name="description" content="Blog Travel React" />
      </Helmet>
      <MainHeader />
      <Slider />
      <MainContent />
      <MainFooter />
      <GlobalStyle />
    </AppWrapper>
  );
}
