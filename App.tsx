/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from './src/utils';
import Routes from './src/route';
import {Provider} from 'react-redux';
import { store } from './src/store';
const theme = Theme.createTheme();
const App = () => {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    </Provider>
  );
};

export default App;
