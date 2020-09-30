import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avtar from './Avtar';
import Demo from './Demo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Demo name="NAVNATH"/>
    <div><Avtar /></div></React.StrictMode>,document.getElementById('root')
);


serviceWorker.unregister();
