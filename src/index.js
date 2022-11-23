import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {GiphyApp} from './components/giphyApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GiphyApp />
  </React.StrictMode>
);

