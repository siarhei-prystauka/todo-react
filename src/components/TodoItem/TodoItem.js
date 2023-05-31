import './todo.scss';

const TodoItem = (props) => {
    return (
        <div className={`todo-item ${props.isCompleted ? 'completed' : ''}`}>
            <label className="todo-item-status-label">
                <input type="checkbox" className="todo-item-status" />
            </label>
            <span className="todo-item-title">{props.title}</span>
            <input type="button" className="todo-item-remove" value="x"></input>
        </div>
    );
}

export default TodoItem;