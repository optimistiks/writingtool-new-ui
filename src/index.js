import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css'
import 'flexboxgrid/dist/flexboxgrid.css'
import './index.css';

injectTapEventPlugin()

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
