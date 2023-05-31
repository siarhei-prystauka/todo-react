import './todo-filter.scss';

const TodoListFilter = () => {
    return (
        <div className="todos-filter">
            <span className="todos-count">5 items left</span>
            <nav>
                <a href="#" className="filter-link selected">All</a>
                <a href="#" className="filter-link">Active</a>
                <a href="#" className="filter-link">Completed</a>
            </nav>
            <nav>
                <a href="#" className="filter-link">Clear Completed</a>
            </nav>
        </div>
    );
}

export default TodoListFilter;