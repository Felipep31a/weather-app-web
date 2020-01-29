import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../page/main'
import WeatherContext from '../provider/weather/weather.provider'
import ErrorBoundary from '../components/error-boundaries/error-boundaries';

const Root = () => (
  <ErrorBoundary>
    <WeatherContext>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </WeatherContext>
  </ErrorBoundary>
);

export default Root;