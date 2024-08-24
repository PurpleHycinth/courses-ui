import React, { useState } from 'react';

function AddInstance() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/instances/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year,
        semester,
        course: courseId,
      }),
    }).then(response => response.json())
      .then(data => {
        console.log('Instance created:', data);
        // Optionally, redirect to instance list or clear the form
      });
  };

  return (
    <div>
      <h2>Add New Course Instance</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
        <label>
          Semester:
          <input
            type="number"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </label>
        <br />
        <label>
          Course ID:
          <input
            type="number"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Instance</button>
      </form>
    </div>
  );
}

export default AddInstance;
