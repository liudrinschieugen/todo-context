import { useState } from 'react';
import uuid from 'react-uuid';
import Button from '../UI/Button/Button';
import styles from './TodoModal.module.scss';

const initialValues = {
  title: '',
  status: false,
};

const TodoModal = ({ isModalOpen, error, setError, closeModal, addTodo }) => {
  const [values, setValues] = useState(initialValues);

  const closeModalHandler = () => {
    closeModal();
    setValues(initialValues);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (values.title === '') {
      setError(true);
      return;
    }

    addTodo({
      id: uuid(),
      title: values.title,
      status: values.status === 'completed' ? true : false,
    });
    setValues(initialValues);

    closeModalHandler();
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.wrapper} onClick={closeModalHandler}>
          <div
            className={styles.container}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.modalHeader}>
                <h2 className={styles.formTitle}>Add todo</h2>
                <Button className={styles.closeBtn} onClick={closeModalHandler}>
                  &times;
                </Button>
              </div>
              <label htmlFor='title'>Title</label>
              {error && <p className={styles.error}>Please enter a title.</p>}
              <input
                type='text'
                id='title'
                name='title'
                value={values.title}
                onChange={changeHandler}
              />
              <label htmlFor='status'>Status</label>
              <select name='status' id='status' onChange={changeHandler}>
                <option value={'incompleted'}>Incompleted</option>
                <option value={'completed'}>Completed</option>
              </select>
              <div className={styles.actions}>
                <Button type='submit' mode='primary'>
                  Add todo
                </Button>
                <Button mode='cancel' onClick={closeModalHandler}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
