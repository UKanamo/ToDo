import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let tasksList = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

const tasks = localStorage.getItem('storedTasks');
if(tasks) {
    tasksList = JSON.parse(tasks);
}

ReactDOM.render(<Todo tasks={tasksList}/>, document.getElementById('todo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
