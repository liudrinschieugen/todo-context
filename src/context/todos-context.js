import { createContext, useEffect, useState } from 'react';

const getLocalStorageData = () => {
  let todos = localStorage.getItem('todos');

  return todos ? JSON.parse(localStorage.getItem('todos')) : [];
};

const TodosContext = createContext({
  todos: [],
  addTodo: ({ id, title, status }) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
  filterTodos: (name) => {},
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getLocalStorageData());
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);

  useEffect(() => {
    if (filterStatus) return;
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, filterStatus]);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  const filterTodoHelper = (thing) => {
    setFilteredTodos([...todos.filter((todo) => todo.status === thing)]);
  };

  const addTodo = ({ id, title, status }) => {
    setTodos([{ id: id, title: title, status: status }, ...todos]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = [...todos.filter((item) => item.id !== id)];
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = [
      ...todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      ),
    ];
    setTodos(updatedTodos);
  };

  const filterTodos = (name) => {
    setFilterStatus(true);

    if (name === 'completed') {
      filterTodoHelper(true);
      return;
    }

    if (name === 'incompleted') {
      filterTodoHelper(false);
      return;
    }

    setTodos(getLocalStorageData());
    setFilterStatus(false);
  };

  const todosContext = {
    todos: !filterStatus ? todos : filteredTodos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    completeTodo,
    filterTodos,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
