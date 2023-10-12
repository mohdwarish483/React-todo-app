import React from "react";

function CompletedTasks({ todos }) {
  return (
    <>
      {todos
        .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
        .map((todo) => {
          return (
            <li key={todo.id + 1} className="completedtask__task">
              <span>{todo.value}</span> Task completed at:{" "}
              <strong>
                {todo.endDate
                  .toLocaleString()
                  .replace(/T/g, " ")
                  .replace(/Z/g, " ")}
              </strong>
            </li>
          );
        })}
    </>
  );
}

export default CompletedTasks;
