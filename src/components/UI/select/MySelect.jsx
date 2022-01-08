import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {

  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value=''>{defaultValue}</option>
      {
        options.map(x => (
          <option key={x.value} value={x.value}>
            {x.name}
          </option>
        ))
      }
    </select>
  )
};

export default MySelect;