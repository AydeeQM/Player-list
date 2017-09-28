
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>PLAYERS:{}</h1>
            <h1>TOTAL POINTS:{}</h1>
          </div>
          <div className="col-md-4">
            <div><h1>STOPWATH</h1></div>
            <div>{}</div>
            <div>
              <button>START</button>
              <button>RESET</button>
            </div>
          </div>
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
    <div className="container">
        <input type="text" placeholder="ENTER A NAME"/>
        <button>ADD PLAYER</button>
    </div>
  );
}


let PLAYERS = [
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

ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));