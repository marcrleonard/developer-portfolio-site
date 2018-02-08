import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, browerHistory} from 'react-router-dom';
import Data from './all';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
<Data />
</Router>
    , document.getElementById('root'))
// registerServiceWorker();
