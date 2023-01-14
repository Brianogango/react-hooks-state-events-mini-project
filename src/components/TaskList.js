import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {props.tasks.map((task ,index) => (
         <Task
          key={index} 
          text={task.text} 
          category={task.category}
          onDelete={props.onDelete}
          id={task.id}
      
          />
        ))}
    </div>
  );
}

export default TaskList;
