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

import { Switch, Route } from 'react-router-dom';

import Header from 'containers/Header';
import Footer from 'containers/Footer';
import Content from 'containers/Content';

import { GlobalStyle } from 'global-styles';

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
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
