import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, status, startDate, endDate, mentor } = props;

  // Inline style: green for "Ongoing" status, blue for everything else
  const headingStyle = {
    color: status === 'Ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Start Date</dt>
        <dd>{startDate}</dd>

        <dt>End Date</dt>
        <dd>{endDate}</dd>

        <dt>Mentor</dt>
        <dd>{mentor}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
