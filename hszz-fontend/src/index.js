import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import MainPage from "./components/MainPage";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <MainPage/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
