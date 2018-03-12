import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Nav';
import registerServiceWorker from './registerServiceWorker';
import Favicon from 'react-favicon';

const rootEl = document.getElementById('root');
 
ReactDOM.render(
    <div>
        <favicon url = "http://oflisback.github.io/react-favicon/public/img/react.ico"/>
        <App />
        <Navbar />
    </div>,
  rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // eslint-disable-line global-require
        ReactDOM.render(
            <App>
                <NextApp />
            </App>,
            rootEl
        );
    });
}


registerServiceWorker();
