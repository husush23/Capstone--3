/*eslint-disable*/
function CurrencyMock() {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>Pair name</h3>
        <div className='values'>
          <div className='buy'>
            <span>&#8599;</span> &nbsp;
            <span>{parseFloat(34).toFixed(6)}</span>
          </div>
          <div className='sell'>
            <span>&#8600;</span> &nbsp;
            <span>{parseFloat(35).toFixed(6)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyMock;
