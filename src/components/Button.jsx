import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
    <span className="button" onClick={props.onClick}>
        {props.character}
    </span>
);

Button.propTypes = {
    character: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;