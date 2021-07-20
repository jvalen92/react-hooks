import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleToggle, handleDelete }) => {


    return (

        <ul className="list-group list-group-flush">

            {
                todos.map((todo, index) =>
                (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        index={index}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
