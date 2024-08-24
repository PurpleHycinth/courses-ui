import React, { useState, useEffect } from 'react';

function InstanceList() {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    fetch('/api/instances/')
      .then(response => response.json())
      .then(data => setInstances(data));
  }, []);

  return (
    <div>
      <h2>Instance List</h2>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            {instance.year} - Semester {instance.semester}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstanceList;
