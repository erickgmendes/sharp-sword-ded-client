import React from "react";

const TextBox = props => 
  <>
      <label>{props.label}</label>
      <input type="text" value={props.value} />
  </>

export default TextBox