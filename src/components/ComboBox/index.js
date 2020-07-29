import React from "react";

export default () => {
  if (this.props.value === undefined) return <></>;
  return (
    <>
      <label>{this.props.label}</label>
      <select>
        <option>1</option>
      </select>

    </>
  );
}