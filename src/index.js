import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css'
import '@material/typography/dist/mdc.typography.css'
import 'flexboxgrid/dist/flexboxgrid.css'
import 'react-joyride/lib/react-joyride-compiled.css'
import './index.css';

injectTapEventPlugin()

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
