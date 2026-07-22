import React from 'react';

function IndianPlayers() {
  // A single array of 11 Indian players
  const teamPlayers = [
    'Rohit Sharma',
    'Shubman Gill',
    'Virat Kohli',
    'Shreyas Iyer',
    'KL Rahul',
    'Ravindra Jadeja',
    'Hardik Pandya',
    'Rishabh Pant',
    'Axar Patel',
    'Mohammed Shami',
    'Jasprit Bumrah'
  ];

  // (a) Array Destructuring: split into Odd Team players (index 0,2,4...)
  // and Even Team players (index 1,3,5...) using ES6 destructuring
  const [
    odd1, even1,
    odd2, even2,
    odd3, even3,
    odd4, even4,
    odd5, even5,
    odd6
  ] = teamPlayers;

  const oddTeamPlayers = [odd1, odd2, odd3, odd4, odd5, odd6];
  const evenTeamPlayers = [even1, even2, even3, even4, even5];

  // (b) Two separate arrays merged using the ES6 spread operator
  const T20Players = ['Rohit Sharma', 'Suryakumar Yadav', 'Arshdeep Singh'];
  const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Yash Dhull', 'Tilak Varma'];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div className="section">
      <h2>Indian Players</h2>

      <h3>Odd Team Players (Destructuring)</h3>
      <ul>
        {oddTeamPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Even Team Players (Destructuring)</h3>
      <ul>
        {evenTeamPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>T20 Players</h3>
      <ul>
        {T20Players.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Ranji Trophy Players</h3>
      <ul>
        {RanjiTrophyPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Merged Players (T20 + Ranji Trophy)</h3>
      <ul>
        {mergedPlayers.map((name, index) => (
          <li key={index} className="merged">{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
