import styles from './Title.module.scss';

const Title = ({ children, ...rest }) => {
  return (
    <h1 className={styles.title} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
