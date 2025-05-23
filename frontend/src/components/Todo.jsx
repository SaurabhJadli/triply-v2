import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([
  ]);

  const [inputValue, setInputValue] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const addTask = () => {
    if (inputValue.trim() === '') {
      alert('You must write something!');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      isChecked: false,
      isEditing: false,
      date: new Date()
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleChecked = (id) => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, isChecked: !task.isChecked } : task))
    );
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setInputValue(taskToEdit.text);
    setEditingTask(id);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map(task =>
        task.id === editingTask ? { ...task, text: inputValue, isEditing: false } : task
      )
    );
    setInputValue('');
    setEditingTask(null);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (editingTask !== null) {
        saveEdit();
      } else {
        addTask();
      }
    }
  };

  return (
    <div className="todo-container">
      <div id="myDIV" className="todo-header">
        <h2 className="todo-h2">To Do List</h2>
        <input className="todo-input"
          type="text"
          id="myInput"
          placeholder="Make your list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        {editingTask !== null ? (
          <button onClick={saveEdit} className="editBtn">
            Save
          </button>
        ) : (
          <span onClick={addTask} className="addBtn">
            Add
          </span>
        )}
      </div>

      <ul id="myUL" className="todo-ul">
        {tasks.map(task => (
          <li key={task.id} className={task.isChecked ? 'checked' : ''}>
            <div className="val">{task.text}</div>
            <div className="controls">
              <span onClick={() => toggleChecked(task.id)}>
                {task.isChecked ? '✔' : '✓'}
              </span>
              <span onClick={() => editTask(task.id)} className="edit">
                &#9998;
              </span>
              <span onClick={() => deleteTask(task.id)} className="close">
                &#10006;
              </span>
            </div>
            <span className="date">{formatDate(task.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;