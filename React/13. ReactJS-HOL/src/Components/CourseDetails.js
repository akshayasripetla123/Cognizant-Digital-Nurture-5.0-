import React from 'react';

const courses = [
  { id: 1, title: 'React Fundamentals', level: 'Beginner', seatsLeft: 15 },
  { id: 2, title: 'Advanced React Patterns', level: 'Advanced', seatsLeft: 0 },
  { id: 3, title: 'JavaScript ES6+', level: 'Intermediate', seatsLeft: 8 },
  { id: 4, title: 'Full Stack with Node & React', level: 'Advanced', seatsLeft: 3 }
];

// CONDITIONAL RENDERING with a SWITCH statement: returns a different
// CSS class name / label depending on the course level
function getLevelBadge(level) {
  switch (level) {
    case 'Beginner':
      return { className: 'level-beginner', label: 'Beginner' };
    case 'Intermediate':
      return { className: 'level-intermediate', label: 'Intermediate' };
    case 'Advanced':
      return { className: 'level-advanced', label: 'Advanced' };
    default:
      return { className: 'level-default', label: 'General' };
  }
}

// PREVENTING A COMPONENT FROM RENDERING: this component returns null
// (renders nothing) whenever there are seats available; it is only
// visible when a course is fully booked
function SoldOutNotice({ seatsLeft }) {
  if (seatsLeft > 0) {
    return null;
  }
  return <span className="sold-out">Sold Out</span>;
}

// Extracted list-item component; key is supplied by the parent's map()
function CourseItem({ course }) {
  const badge = getLevelBadge(course.level);

  return (
    <li className="list-item">
      <strong>{course.title}</strong>{' '}
      <span className={badge.className}>{badge.label}</span>{' '}
      {/*
        CONDITIONAL RENDERING with an IIFE (Immediately Invoked Function
        Expression) directly inside JSX - useful when the logic is more
        than a simple ternary/&&, without needing a separate variable
      */}
      {(() => {
        if (course.seatsLeft === 0) {
          return null; // SoldOutNotice below will handle the message
        } else if (course.seatsLeft <= 5) {
          return <span className="seats-low"> - Only {course.seatsLeft} seats left!</span>;
        } else {
          return <span className="seats-ok"> - {course.seatsLeft} seats available</span>;
        }
      })()}
      <SoldOutNotice seatsLeft={course.seatsLeft} />
    </li>
  );
}

function CourseDetails() {
  return (
    <div className="section">
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
