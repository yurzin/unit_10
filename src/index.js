import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReduser from './redusers';
import initialState from './store/initialState';

const store = createStore(rootReduser, initialState);

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);

reportWebVitals();
