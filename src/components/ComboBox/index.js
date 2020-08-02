import React from "react";

const styles = {
  input: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 12
  },
}

const ComboBox = props =>
  <>
    <select style={styles.input} className="form-control form-control-sm">
      {props.lista.map(x => (<option key={x.id}>{x.nome}</option>))}
    </select>
    <label
      style={styles.label}
    >{props.label}
    </label>
  </>

export default ComboBox