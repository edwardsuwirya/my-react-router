import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import appConfig from "./config";

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = appConfig();
root.render(
    <React.StrictMode>
        <Provider store={config.store}>
            <RouterProvider router={config.router}/>
        </Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
