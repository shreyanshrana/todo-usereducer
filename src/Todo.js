import React from 'react'

const Todo = ({todo, dispatch}) => {
    return (
        <div style={{cursor:'pointer', border:'1px solid black'}} 
        onClick={() => {
            dispatch({type:'REMOVE', payload:todo.id});
        }}>
            <p>{todo.name}</p>
        </div>
    )
}

export default Todo
