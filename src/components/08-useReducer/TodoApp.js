import React, { useReducer } from 'react';
import './style.css';
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    console.log(todos);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: 'New Todo',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, index) => (
                                <li
                                    className="list-group-item"
                                    key={todo.id}
                                >
                                    <p className="text-center"> {index + 1}.{todo.desc} </p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Aprender"
                            autoComplete="off"

                        />

                        <button
                            className="btn btn-outline-primary mt-1 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default TodoApp
