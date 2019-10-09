import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

console.log('reducer', createStore);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
