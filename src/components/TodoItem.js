import "./TodoItem.css"

const TodoItem = ({ tarefa }) => {
    return (
        <div className="separator">
            <li className="todo-item">
                <input type="checkbox" />
                {tarefa}
            </li>
        </div>
    )
}

export default TodoItem;