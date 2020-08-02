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

const TextBox = props =>
  <>
    <input
      type="text"
      className="form-control form-control-sm"
      value={props.value}
      style={styles.input}
    />
    <label
      style={styles.label}
    >{props.label}
    </label>
  </>

export default TextBox