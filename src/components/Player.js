const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card>
      <Card.Header>
        <h2>{name}</h2>
      </Card.Header>
      <Card.Body>
        <p>Team: {team}</p>
        <p>Nationality: {nationality}</p>
        <p>Jersey number: {jerseyNumber}</p>
        <p>Age: {age}</p>
        <img src={imageUrl} />
      </Card.Body>
    </Card>
  );
};

export default Player;