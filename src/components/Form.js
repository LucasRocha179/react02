import { useState } from 'react';

function MyForm(props) {
    const [tarefaText, setTarefaText] = useState('');

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        if (tarefaText !== "") {
            event.preventDefault();
            props.onSend(tarefaText);
            setTarefaText('');
            alert('Nova OS criada com sucesso!');
        } else {
            event.preventDefault();
            alert('Campo detalhes OS não informado');
        }
    }

    return (
        <form className='todo-register' onSubmit={handleSubmit}>
            <label htmlFor='tarefa'>Tarefa:</label>
            <input type="text"
                id="tarefa"
                placeholder='Digite detalhes da nova OS'
                value={tarefaText}
                onChange={handleChange}
            />
            <button type='submit' onClick={handleSubmit} >Adicionar OS</button>
        </form>
    )
};

export default MyForm;

