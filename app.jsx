
const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="col-md-10">
          <table className="stats">
            <tr>
              <td>PLAYERS:</td>
              <td>{props.players.length}</td>
            </tr>
            <tr>
              <td>TOTAL POINTS:</td>
              <td>{}</td>
            </tr>
          </table>
        </div>
        <div className="stopwatch">
          <h2>STOPWATH</h2>
          <div className="stopwatch-time">{}</div>
          <button>start</button>
          <button>reset</button>
        </div>
      </div>
    </header>
  );
}

const PlayerList = () => {
  return (
    <div className="container">
      <table>
        <tr>
          <td></td>
          <td><button className="counter-action decrement">-</button></td>
          <td></td>
          <td><button className="counter-action increment">+</button></td>
        </tr>
        <tr>
          <td></td>
          <td><button className="counter-action decrement">-</button></td>
          <td></td>
          <td><button className="counter-action increment">+</button></td>
        </tr>
        <tr>
          <td></td>
          <td><button className="counter-action decrement">-</button></td>
          <td></td>
          <td><button className="counter-action increment">+</button></td>
        </tr>
      </table>
    </div>
  );
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text" placeholder="ENTER A NAME" />
        <input type="submit" value="Add Player"/>
      </form>
    </div>
  );
}


let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={players} />, document.getElementById('container'));