import TodoItem from '../TodoItem/TodoItem'
import './todo-list.scss';

const TodoList = () => {
    return (
        <section className="todo-list">
            <TodoItem title="Jog around the park 3x" />
            <TodoItem title="10 minutes meditation"/>
            <TodoItem title="Read for 1 hour"/>
            <TodoItem title="Pick up groceries" isCompleted="true"/>
            <TodoItem title="Complete Todo App on Frontend Mentor"/>
        </section>
    );
}

export default TodoList;