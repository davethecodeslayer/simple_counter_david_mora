import React from "react";
import PropTypes from "prop-types"

export const Counter = (props) => {
  return (
    <div className="Card">
      <div className="card" id="number">
        <h1>{props.unidad}</h1>
      </div>
    </div>
  );
};

Counter.propTypes = {
  unidad: PropTypes.number, 
  }