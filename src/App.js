import './app.scss';

import Header from './components/UI/Header/Header'
import TodoList from './components/TodoList/TodoList';
import NewTodoItem from './components/NewTodoItem/NewTodoForm';
import TodoListFilter from './components/TodoListFilter/TodoListFilter';

function App() {
  return (
    <div className="todo-app">
      <Header />
      <NewTodoItem />
      <TodoList />
      <TodoListFilter />
    </div>
  );
}

export default App;
