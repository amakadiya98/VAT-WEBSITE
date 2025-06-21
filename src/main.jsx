import './style.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { DirectionProvider } from './context/DirectionContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <DirectionProvider>
        <App />
    </DirectionProvider>
);


