import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import AddCourse from './AddCourse';
import InstanceList from './InstanceList';
import AddInstance from './AddInstance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/create-course" element={<AddCourse />} />
          <Route path="/instances" element={<InstanceList />} />
          <Route path="/create-instance" element={<AddInstance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
