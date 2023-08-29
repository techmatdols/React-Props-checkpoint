import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <Player name={player.name} team={player.team} nationality={player.nationality} jerseyNumber={player.jerseyNumber} age={player.age} imageUrl={player.imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;