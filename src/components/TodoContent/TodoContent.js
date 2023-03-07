import { useContext } from 'react';
import TodosContext from '../../context/todos-context';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoContent.module.scss';

const TodoContent = () => {
  const { todos, deleteTodo, completeTodo } = useContext(TodosContext);

  return (
    <ul className={styles.wrapper}>
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            status={item.status}
            completeTodo={() => completeTodo(item.id)}
            deleteTodo={() => deleteTodo(item.id)}
          />
        ))
      ) : (
        <p>No todos</p>
      )}
    </ul>
  );
};

export default TodoContent;
