import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { DroneListProvider, ViolatingDronesProvider } from './contexts/ViolatingDronesContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <ViolatingDronesProvider>
            <App />
        </ViolatingDronesProvider>
    </GlobalStyles>,
    /* </React.StrictMode>, */
);
