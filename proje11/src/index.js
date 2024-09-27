import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.scss";
import Rooter from './Rooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>
);


