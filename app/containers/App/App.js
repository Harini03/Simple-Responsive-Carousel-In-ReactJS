import React from 'react';
import { HashRouter } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';
import routes from '../../routes';

const App = () => (
  <div>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <HashRouter>{routes}</HashRouter>

    </ErrorBoundary>
  </div>
);


export default App;
