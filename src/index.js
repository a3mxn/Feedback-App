import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './Index.css';

// yeh learn kar raha tha tabki file hai ./learningApp.js
// import App from "./learningApp";

// ReactDOM.render(<h1>Aman's Ap</h1>,document.getElementById('root'));
//ReactDOM.render(react element to render,DOM element where you want to render)

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>
,document.getElementById('root')
);