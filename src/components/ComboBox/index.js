import React from "react";

const ComboBox = props =>
  <>
    <label>{props.label}</label>
    <select className="form-control form-control-sm">
      {props.lista.map(x => (<option key={x.id}>{x.nome}</option>))}
    </select>
  </>

export default ComboBox