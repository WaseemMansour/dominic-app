import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const app = <Provider store={ store }><App /></Provider>;
const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(app);
