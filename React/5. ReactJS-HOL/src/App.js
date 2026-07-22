import React from 'react';
import CohortDetails from './Components/CohortDetails';

const cohorts = [
  {
    id: 1,
    name: 'React JS - Batch 12',
    status: 'Ongoing',
    startDate: '01-Jun-2026',
    endDate: '30-Jul-2026',
    mentor: 'Priya Sharma'
  },
  {
    id: 2,
    name: 'Java Full Stack - Batch 07',
    status: 'Completed',
    startDate: '01-Feb-2026',
    endDate: '30-Apr-2026',
    mentor: 'Arun Kumar'
  },
  {
    id: 3,
    name: '.NET Core - Batch 04',
    status: 'Ongoing',
    startDate: '15-Jun-2026',
    endDate: '15-Aug-2026',
    mentor: 'Sneha Reddy'
  },
  {
    id: 4,
    name: 'Python Data Science - Batch 09',
    status: 'Completed',
    startDate: '10-Jan-2026',
    endDate: '10-Mar-2026',
    mentor: 'Vikram Rao'
  }
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Cognizant Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          name={cohort.name}
          status={cohort.status}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
          mentor={cohort.mentor}
        />
      ))}
    </div>
  );
}

export default App;
