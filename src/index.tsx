import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
// Components
import App from 'App/App';
// Mui
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
// Theme
import theme from 'theme';
// Store
import { setupStore } from 'store';
// styles
import 'index.scss';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </Router>
      </Provider>
    </ThemeProvider>
  </StyledEngineProvider>
);
