import { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './TodoItem.module.scss';
import { getClassNames } from '../../utils/getClassNames';

const TodoItem = ({ title, status, completeTodo, deleteTodo }) => {
  const [checked, setChecked] = useState(status);

  const switchHandler = () => {
    setChecked(!checked);
  };

  return (
    <li className={styles.item}>
      <div
        className={getClassNames([
          styles.title,
          status ? styles.completed : '',
        ])}
      >
        {title}
      </div>
      <div className={styles.itemActions}>
        <label className={styles.switch}>
          <input
            type='checkbox'
            checked={checked}
            onClick={switchHandler}
            onChange={completeTodo}
          />
          <span className={styles.slider}></span>
        </label>
        <Button className={styles.closeBtn} onClick={deleteTodo}>
          &#128465;
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
