import React, { useState } from "react";
import "./App.css"; // Importing CSS

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <h3 className="count">{count}</h3>
      <div className="btn-group">
        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={increment} disabled={count === 10}>
          Increment
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      {count === 10 && <p className="limit">Maximum limit reached</p>}
    </div>
  );
}

// Form Component
function StudentForm() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(""); // For validation message

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.course) {
      setError("⚠️ All fields are required!");
      return;
    }

    setRecords([...records, formData]);
    setFormData({ name: "", email: "", course: "" });
    setError(""); // clear error
  };

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
  };

  return (
    <div className="card">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}

      {records.length > 0 && (
        <>
          <h3>Submitted Records</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{rec.name}</td>
                  <td>{rec.email}</td>
                  <td>{rec.course}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="container">
      <Counter />
      <StudentForm />
    </div>
  );
}
