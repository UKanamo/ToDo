import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks}
         //updateList内でthisを使っているのでbindする
         console.log(this.state);
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this)
    }
    updateList(text) {
        console.log(this.state);
        const updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({tasks: updatedTasks}); //stateを更新
        this.updateLocalStorage(updatedTasks);
    }
     removeTask(text) {
         console.log(this.state);
        const updatedTasks = this.state.tasks;

        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }
    updateLocalStorage(updatedTasks) {
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddNewTask updateList={this.updateList} />
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
            );
    }
}
