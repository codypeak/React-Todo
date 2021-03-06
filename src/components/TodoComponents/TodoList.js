// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('todo list props', props);
    return (
        <div>
                {props.todoList.map((item, index) => { 
                    return <Todo todo={item} key={index} />       
                })}
        </div>
    )
}
export default TodoList;