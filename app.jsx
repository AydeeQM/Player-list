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

function sum (){
  let total = players.reduce((prev, cur) => prev + cur.score, 0);
  return total;
}

const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="col-md-10">
          <table className="stats"><tbody>
            <tr>
              <td>PLAYERS:</td>
              <td>{props.players.length}</td>
            </tr>
            <tr>
              <td>TOTAL POINTS:</td>
              <td>{sum(players)}</td>
            </tr>
          </tbody></table>
        </div>
        <div className="stopwatch">
          <h2>STOPWATH</h2>
          <div className="stopwatch-time">0</div>
          <button>start</button>
          <button>reset</button>
        </div>
      </div>
    </header>
  );
}

const PlayerList = ({ players }) => {
  return (
    <div>
      {
        players.map((item, index) => {
          return (
            <div key={index} className="player">
              <div className="player-name col-md-10">{item.name}</div>
              <div className="player-score counter">
                <div className="counter-action decrement">-</div>
                <div className="counter-score">{item.score}</div>
                <div className="counter-action increment">+</div>
              </div>
            </div>);
        })
      }
    </div>);
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text" placeholder="enter name" />
        <input type="submit" value="Add Player" />
      </form>
    </div>
  );
}

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