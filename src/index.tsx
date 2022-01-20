import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnalyticsBrowser } from '@segment/analytics-next';

AnalyticsBrowser.load({writeKey: 'npm-key'})
  .then(() => {
    console.log('>>>>> next loaded');
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

