import React from "react";

const TextBox = props =>
  <>
    <label>{props.label}</label>
    <input className="form-control form-control-sm" type="text" value={props.value} />
  </>

export default TextBox