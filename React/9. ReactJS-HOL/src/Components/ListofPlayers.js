import React from 'react';

// Array of 11 players with their names and scores
const players = [
  { id: 1, name: 'Rohit Sharma', score: 85 },
  { id: 2, name: 'Shubman Gill', score: 62 },
  { id: 3, name: 'Virat Kohli', score: 95 },
  { id: 4, name: 'Shreyas Iyer', score: 58 },
  { id: 5, name: 'KL Rahul', score: 74 },
  { id: 6, name: 'Ravindra Jadeja', score: 45 },
  { id: 7, name: 'Hardik Pandya', score: 68 },
  { id: 8, name: 'Rishabh Pant', score: 80 },
  { id: 9, name: 'Axar Patel', score: 30 },
  { id: 10, name: 'Mohammed Shami', score: 12 },
  { id: 11, name: 'Jasprit Bumrah', score: 8 }
];

function ListofPlayers() {
  // Filter players with scores below 70 using an ES6 arrow function
  const lowScorePlayers = players.filter((player) => player.score < 70);

  return (
    <div className="section">
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul>
        {/* Render the list using the ES6 map() method */}
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {lowScorePlayers.map((player) => (
          <li key={player.id} className="low-score">
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
