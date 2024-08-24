import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/courses/${id}/`)
      .then(response => response.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Course Code: {course.course_code}</p>
      <p>Description: {course.description}</p>
    </div>
  );
}

export default CourseDetail;
