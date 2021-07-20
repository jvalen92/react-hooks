import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({handleAdd}) => {


    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (description.trim().length <= 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo);

        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}

                />

                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd
