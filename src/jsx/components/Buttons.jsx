import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function App({ group }) {
  const chartSelectionContainerRef = useRef();

  const changeActiveMap = (event, idx) => {
    chartSelectionContainerRef.current.querySelectorAll('button').forEach(el => {
      el.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    document.querySelector(`.charts_container_${group}`).querySelectorAll('.chart_wrapper').forEach(el => {
      el.classList.add('hidden');
    });
    document.querySelector(`.charts_container_${group}`).querySelector(`.chart_wrapper_${idx}`).classList.remove('hidden');
  };
  return (
    <div className="chart_selection_container" ref={chartSelectionContainerRef}>
      <div className="info_text"><p>Change the date of interest</p></div>
      <div className="button_container"><button type="button" onClick={(event) => changeActiveMap(event, '0')}>15.10.2023</button></div>
      <div className="button_container"><button type="button" onClick={(event) => changeActiveMap(event, '1')}>7.11.2023</button></div>
      <div className="button_container"><button type="button" onClick={(event) => changeActiveMap(event, '2')} className="active">26.11.2023</button></div>
    </div>
  );
}

App.propTypes = {
  group: PropTypes.string.isRequired
};

App.defaultProps = {
};

export default App;
