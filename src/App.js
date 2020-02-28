import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './theme/global/globalStyle';
import store, { history } from './redux/store';
import Boot from './redux/boot';
import Routes from './routes';
import AppProvider from './AppProvider';
import { ConnectedRouter } from 'connected-react-router'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <AppProvider>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </AppProvider>
    </ConnectedRouter>
  </Provider>
);
Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
