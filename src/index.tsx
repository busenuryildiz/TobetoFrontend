import React from 'react';
import ReactDOM from "react-dom/client";
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate ekle
import { Provider } from 'react-redux';
import { store, persistor } from './store'; // store ve persistor'u içeri aktar
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement, 
);
Modal.setAppElement('#root');

root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);

reportWebVitals();
