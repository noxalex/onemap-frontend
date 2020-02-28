import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import App from './components/App';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
