import React, { useEffect, useReducer } from 'react';
import './style.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm'
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initialState = [];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoID) => {


        const action = {
            type: 'delete',
            payload: todoID
        }

        dispatch(action);
    }

    const handleToggle = (todoID) => {
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Todo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />

                </div>

                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd} />
                </div>

            </div>



        </div>
    )
}

export default TodoApp
