import { useState } from 'react';
import TodoItem from './TodoItem';
import MyForm from './Form';
import './TodoList.css'

const TodoList = () => {
    const [tarefas, setTarefas] = useState(['OS 1']); 

    const onSend = (value) => {
        setTarefas([...tarefas, value]);
    }

    return (
        <section className="todolist">
            <h2 className="todo-title">Minha Lista de OS</h2>
            <MyForm onSend={onSend}></MyForm>
            <ol className="todos">
                {tarefas.map((item, index) => {
                    return <TodoItem tarefa={item} key={index} />
                })}
            </ol>
        </section>
    )
};

export default TodoList;