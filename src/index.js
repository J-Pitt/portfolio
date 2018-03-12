import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Nav';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';
import {AppContainer} from 'react-hot-loader';

const rootEl = document.getElementById('root');
 
ReactDOM.render(
    <AppContainer>
    <div>
        <Favicon url = "http://oflisback.github.io/react-favicon/public/img/react.ico"/>
        <App />
        <Navbar />
    </div>
    </AppContainer>,
  rootEl
);

// Webpack Hot Module Replacement API
//if (module.hot) {
//  module.hot.accept('./App', () => { ReactDOM.render(App) })
//}

//if (module.hot) {
//    module.hot.accept('./App', () => {
//        const NextApp = require('./App').default; // eslint-disable-line global-require
//        ReactDOM.render(
//            <AppContainer>
//                <NextApp />
//            </AppContainer>,
//            rootEl
//        );
//    });
//}


registerServiceWorker();
