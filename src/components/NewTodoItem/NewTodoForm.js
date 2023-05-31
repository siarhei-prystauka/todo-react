import './new-todo.scss';

const NewTodoForm = () => {
    return (
        <div className="new-item">
            <form>
                <input placeholder='What is next?' className="new-item-text" type="text"></input>
            </form>

        </div>
    );
}

export default NewTodoForm;