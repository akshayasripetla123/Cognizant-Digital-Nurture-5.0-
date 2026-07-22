import React from 'react';
import '../Stylesheets/mystyle.css';

// Function component that accepts Name, School, Total and goal (number of subjects)
// and calculates the average score of a student
function CalculateScore(props) {
  const { Name, School, Total, goal } = props;
  const average = (Total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Management Portal</h2>
      <table className="score-table">
        <tbody>
          <tr>
            <td className="label">Name:</td>
            <td>{Name}</td>
          </tr>
          <tr>
            <td className="label">School:</td>
            <td>{School}</td>
          </tr>
          <tr>
            <td className="label">Total Marks:</td>
            <td>{Total}</td>
          </tr>
          <tr>
            <td className="label">Number of Subjects:</td>
            <td>{goal}</td>
          </tr>
          <tr>
            <td className="label">Average Score:</td>
            <td className="average">{average}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculateScore;
