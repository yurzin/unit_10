import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReduser from './redusers';
import initialState from './store/initialState';

const store = createStore(rootReduser, initialState);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
