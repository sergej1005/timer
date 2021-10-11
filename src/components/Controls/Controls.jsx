import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="timer headline">
        TIMER
      </h1>
      <h1 className="timer indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="container">
        <button type="button" className="button is-white" onClick={start}>
          Start
        </button>
        <button type="button" className="button is-white" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button is-white" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button is-white" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
