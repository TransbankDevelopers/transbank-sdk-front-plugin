import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import axios from 'axios';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import 'primereact/resources/primereact.css';   
import 'primeflex/primeflex.css';  
import 'primeicons/primeicons.css';
    
//core
import "primereact/resources/primereact.min.css"; 

// Setup Axios once here
axios.defaults.headers = { Accept: 'application/json' };
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
export default axiosInstance;

// Find all widget divs
const widgetDivs = document.querySelectorAll('.tbk-plugin-config-widget');

// Inject our React App into each class
widgetDivs.forEach(div => {
  const root = ReactDOM.createRoot(div);
    root.render(
      <React.StrictMode>
        <App env={div.dataset.env} img={div.dataset.img} ecommerce={div.dataset.ecommerce} />
      </React.StrictMode>
    );
});
