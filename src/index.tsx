import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true
axios.interceptors.response.use(v=>v , (e) => {
  if (e.response?.data?.statusCode === 401) return Promise.reject(e);
  alert(e.response?.data?.message || e.message);
  return Promise.reject(e);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
