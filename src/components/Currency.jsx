import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Currency(props) {
  const {
    ask, bid, open, low, currency, style,
  } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    const detailsProps = {
      ask,
      bid,
      open,
      low,
      currency,
    };
    navigate('/details', { state: detailsProps });
  };

  return (
    <div className="wrapper">
      <button
        className="card"
        onClick={handleClick}
        type="submit"
        style={style}
      >
        <h3>{currency}</h3>
        <div className="values">
          <div className="buy">
            <span>&#8599;</span>
            {' '}
&nbsp;
            <span>{parseFloat(low).toFixed(6)}</span>
          </div>
          <div className="sell">
            <span>&#8600;</span>
            {' '}
            <span>{parseFloat(open).toFixed(6)}</span>
          </div>
        </div>
        <span className="open-details">&#8594;</span>
      </button>
    </div>
  );
}

Currency.propTypes = {
  ask: PropTypes.string.isRequired,
  bid: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Currency;
