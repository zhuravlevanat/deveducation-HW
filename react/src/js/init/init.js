'use strict';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux'; // TODO uncomment to work with REDUX
// import { compose, createStore, applyMiddleware } from 'redux'; // TODO uncomment to work with REDUX
// import createSagaMiddleware from 'redux-saga'; // TODO uncomment to work with SAGA
// import rootReducer from '../roots/rootReducer'; // TODO uncomment to work with REDUX
// import rootSaga from '../roots/rootSaga'; // TODO uncomment to work with SAGA
import configCore from '../config/config';
import RootModule from '../modules/rootModule/RootModule.jsx';

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    document.title = configCore.title;
    setFavIcon(configCore.favIcon);

    // TODO uncomment to work with REDUX
    // const initialState = {
    //     test: {},
    // };
    // TODO uncomment to work with SAGA
    // const sagaMiddleware = createSagaMiddleware({
    //     onError: error => {
    //         alert('Critical error acquired! See console for more details.');
    //         console.error(error);
    //         sagaMiddleware.run(rootSaga);
    //     },
    // });
    // TODO uncomment to work with REDUX
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const store = createStore(
    //     rootReducer,
    //     initialState,
    //     composeEnhancers(applyMiddleware(sagaMiddleware)), // TODO uncomment to work with SAGA
    // );
    // TODO uncomment to work with SAGA
    // sagaMiddleware.run(rootSaga);

    // TODO replace usual render to work with REDUX
    // render(
    //     <Provider store={store}>
    //         <RootModule/>
    //     </Provider>,
    //     document.getElementById('root')
    // );
    render(
        <RootModule/>,
        document.getElementById('root')
    );
}

export function setFavIcon(src) {
    if (!src) {
        return false;
    }

    const favicon = document.createElement('link');

    favicon.rel = 'icon';
    favicon.href = src;
    document.head.appendChild(favicon);
}
