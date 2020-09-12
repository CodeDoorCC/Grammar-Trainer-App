import React from "react";

export default ({ name, gender }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div>{name}</div>
      <div>{gender}</div>
    </div>
  );
};
