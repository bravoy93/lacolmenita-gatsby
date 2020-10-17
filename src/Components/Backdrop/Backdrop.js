import React from "react";

const backdrop = props => (
  <div className={`backdrop`} onClick={props.backdropClickHandler} onKeyPress={props.backdropClickHandler} role="button" aria-label="Close Menu" tabIndex="0"/>
);

export default backdrop;
