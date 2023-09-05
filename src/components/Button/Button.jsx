import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="Btn" type="button">
      {text}
    </button>
  );
};
export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
