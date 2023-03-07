import { useContext } from 'react';
import ModalContext from '../../context/modal-context';
import TodosContext from '../../context/todos-context';
import TodoModal from '../TodoModal/TodoModal';
import Button from '../UI/Button/Button';
import styles from './Header.module.scss';

const buttonNames = [
  { name: 'all' },
  { name: 'completed' },
  { name: 'incompleted' },
];
export const Header = () => {
  const { addTodo, filterTodos } = useContext(TodosContext);
  const { isModalOpen, error, setError, openModal, closeModal } =
    useContext(ModalContext);

  return (
    <div className={styles.actions}>
      <div>
        <Button mode='primary' onClick={openModal}>
          Add Todo
        </Button>
      </div>
      <div className={styles.filter}>
        {buttonNames.map((button, i) => (
          <Button
            mode='secondary'
            name={button.name}
            key={i}
            onClick={() => filterTodos(button.name)}
          >
            {button.name}
          </Button>
        ))}
      </div>
      <TodoModal
        isModalOpen={isModalOpen}
        error={error}
        setError={setError}
        closeModal={closeModal}
        addTodo={addTodo}
      />
    </div>
  );
};
