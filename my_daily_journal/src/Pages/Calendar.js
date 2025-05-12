import React, { useState } from "react";
import Header from "../components/Header";
import "../css/Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todosByDate, setTodosByDate] = useState({});
  const [eventsByDate, setEventsByDate] = useState({});
  const [newTodo, setNewTodo] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [showTodoInput, setShowTodoInput] = useState(false);
  const [showEventInput, setShowEventInput] = useState(false);

  // 🟢 DEFINE BEFORE USING IT
  const formatDateKey = (dateObj) => {
    return dateObj.toISOString().split('T')[0]; // e.g., "2025-03-12"
  };

  const dateKey = formatDateKey(selectedDate);
  const currentTodos = todosByDate[dateKey] || [];
  const currentEvents = eventsByDate[dateKey] || [];

  // Generate month name
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const calendar = [];
    let day = 1;

    for (let week = 0; week < 6; week++) {
      const row = [];
      for (let col = 0; col < 7; col++) {
        if ((week === 0 && col < firstDay) || day > daysInMonth) {
          row.push("");
        } else {
          row.push(day++);
        }
      }
      calendar.push(row);
    }
    return calendar;
  };

  const nextMonth = () => {
    const next = new Date(currentDate);
    next.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(next);
  };

  const prevMonth = () => {
    const prev = new Date(currentDate);
    prev.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prev);
  };

  return (
    <div>
      <Header />
      <div className="calendar-container">
        <div className="calendar-section">
          <div className="calendar-header">
            <button className="arrow" onClick={prevMonth}>‹</button>
            <h2>{monthName} {year}</h2>
            <button className="arrow" onClick={nextMonth}>›</button>
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
              {generateCalendar().map((week, i) => (
                <tr key={i}>
                  {week.map((day, j) => (
                    <td
                      key={j}
                      className={
                        day &&
                        day === selectedDate.getDate() &&
                        currentDate.getMonth() === selectedDate.getMonth() &&
                        currentDate.getFullYear() === selectedDate.getFullYear()
                          ? "highlight"
                          : ""
                      }
                      onClick={() => {
                        if (day !== "") {
                          const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                          setSelectedDate(clickedDate);
                        }
                      }}
                    >
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
            <h4>TO DO LIST ({dateKey}):</h4>
            <ul>
              {currentTodos.map((todo, index) => (
                <li key={index} className={todo.completed ? "completed" : ""}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                      const updated = [...currentTodos];
                      updated[index].completed = !updated[index].completed;
                      setTodosByDate({ ...todosByDate, [dateKey]: updated });
                    }}
                  />
                  {todo.task}
                </li>
              ))}
            </ul>
            {showTodoInput && (
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (newTodo.trim()) {
                      const updated = { ...todosByDate };
                      updated[dateKey] = [...(updated[dateKey] || []), { task: newTodo.trim(), completed: false }];
                      setTodosByDate(updated);
                    }
                    setNewTodo("");
                    setShowTodoInput(false);
                  }
                }}
                placeholder="New task"
                className="input-new-item"
              />
            )}
            <button className="plus-button" onClick={() => setShowTodoInput(true)}>＋</button>
          </div>

          <div className="event-box">
            <h4>EVENTS ({dateKey}):</h4>
            <ul>
              {currentEvents.map((event, index) => (
                <li key={index}>📅 {event}</li>
              ))}
            </ul>
            {showEventInput && (
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (newEvent.trim()) {
                      const updated = { ...eventsByDate };
                      updated[dateKey] = [...(updated[dateKey] || []), newEvent.trim()];
                      setEventsByDate(updated);
                    }
                    setNewEvent("");
                    setShowEventInput(false);
                  }
                }}
                placeholder="New event"
                className="input-new-item"
              />
            )}
            <button className="plus-button" onClick={() => setShowEventInput(true)}>＋</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;