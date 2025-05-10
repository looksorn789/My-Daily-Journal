import React, { useState } from "react";
import Header from "../components/Header";
import "../css/Calendar.css";

function Calendar() {
  const [todos, setTodos] = useState([
    { task: "Figma Designing", completed: true },
    { task: "Do Laundry", completed: false },
    { task: "Walk the dogs", completed: false },
  ]);

  const [events] = useState([
    "Homework for 448",
    "Noah’s Birthday",
    "Update (Marvel Rivals)",
    "Dinner Date at 8pm",
  ]);

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div>
      <Header />
      <div className="calendar-container">
        <div className="calendar-section">
          <div className="calendar-header">
            <button className="arrow">‹</button>
            <h2>March 2025</h2>
            <button className="arrow">›</button>
          </div>
          <table className="calendar-grid">
            <thead>
              <tr>
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, i) => (
                  <th key={i}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["", "", "", "", "", "", 1],
                [2, 3, 4, 5, 6, 7, 8],
                [9, 10, 11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20, 21, 22],
                [23, 24, 25, 26, 27, 28, 29],
                [30, 31, "", "", "", "", ""],
              ].map((week, i) => (
                <tr key={i}>
                  {week.map((day, j) => (
                    <td key={j} className={day === 21 ? "highlight" : ""}>
                      {day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sidebar-section">
          <div className="todo-box">
            <h4>TO DO LIST:</h4>
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? "completed" : ""}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                  />
                  {todo.task}
                </li>
              ))}
            </ul>
            <button className="plus-button">＋</button>
          </div>

          <div className="event-box">
            <h4>EVENTS:</h4>
            <ul>
              {events.map((event, index) => (
                <li key={index}>📅 {event}</li>
              ))}
            </ul>
            <button className="plus-button">＋</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
