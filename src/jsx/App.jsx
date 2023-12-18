import React, { /* useState, useEffect */} from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

import Chart from './components/DatawrapperChart.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
  return (
    <div className="app">
      <div className="charts_container charts_container_0">
        <Buttons group="0" />
        {/* Expenditure losses 15.10.2023 */}
        <div className="chart_wrapper chart_wrapper_0 hidden">
          <Chart chart_id="9FDOg" />
        </div>
        {/* Expenditure losses 7.11.2023 */}
        <div className="chart_wrapper chart_wrapper_1 hidden">
          <Chart chart_id="jFSb4" />
        </div>
        {/* Expenditure losses 26.11.2023 */}
        <div className="chart_wrapper chart_wrapper_2">
          <Chart chart_id="RUDk6" />
        </div>
      </div>

      <div className="charts_container charts_container_1">
        <Buttons group="1" />
        {/* Damage intensity 15.10.2023 */}
        <div className="chart_wrapper chart_wrapper_0 hidden">
          <Chart chart_id="HSw0d" />
        </div>
        {/* Damage intensity 7.11.2023 */}
        <div className="chart_wrapper chart_wrapper_1 hidden">
          <Chart chart_id="ztGcp" />
        </div>
        {/* Damage intensity 26.11.2023 */}
        <div className="chart_wrapper chart_wrapper_2">
          <Chart chart_id="mCkbP" />
        </div>
      </div>

      <div className="charts_container charts_container_2">
        <Buttons group="2" />
        {/* Poverty rate 15.10.2023 */}
        <div className="chart_wrapper chart_wrapper_0 hidden">
          <Chart chart_id="HZJzp" />
        </div>
        {/* Poverty rate 7.11.2023 */}
        <div className="chart_wrapper chart_wrapper_1 hidden">
          <Chart chart_id="Jf5dZ" />
        </div>
        {/* Poverty rate 26.11.2023 */}
        <div className="chart_wrapper chart_wrapper_2">
          <Chart chart_id="5GltN" />
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
