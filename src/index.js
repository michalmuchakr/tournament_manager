import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translationsObject from './translations/translationsObject';

import MainReducer from './reducers/mainReducer';
import App from './App';
import 'styles/common.css';

let store = createStore(
  MainReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
