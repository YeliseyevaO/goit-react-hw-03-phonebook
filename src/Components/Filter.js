import React from "react";
import s from "./Filter.module.css";
export default function Filter({ value, handleChange }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={s.input}
        name="filter"
        value={value}
        type="input"
        onChange={handleChange}
      ></input>
    </>
  );
}
