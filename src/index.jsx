import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import store from './store';
import theme from './theme';
import { ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <Provider store={store}>
    <App />
  </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);