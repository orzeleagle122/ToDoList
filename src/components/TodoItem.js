import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItem.css";

const TodoItem = ({ task: { item, done, id } }) => {
  const handleChange = () => {};
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {/* name */}
      <p className={done && "todoItem--done"}>{item}</p>
    </div>
  );
};

export default TodoItem;
