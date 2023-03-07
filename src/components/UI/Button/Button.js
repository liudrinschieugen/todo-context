import { getClassNames } from '../../../utils/getClassNames';
import styles from './Button.module.scss';

const buttonStyle = {
  primary: 'primary',
  secondary: 'secondary',
  cancel: 'cancel',
};

const Button = ({ children, type, mode, ...rest }) => {
  return (
    <button
      className={getClassNames([
        styles.button,
        styles[`button--${buttonStyle[mode]}`],
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
