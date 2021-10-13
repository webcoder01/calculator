import PropTypes from 'prop-types';
import './Viewer.css';

const Viewer = (props) => (
    <div className="viewer">
        <span>{props.result !== '0' && props.result}</span>
        <span>{props.currentNumber}</span>
    </div>
);

Viewer.propTypes = {
    currentNumber: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
};

export default Viewer;