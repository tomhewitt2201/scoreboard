const Header = (props) => (
    <header id="mainHeader">
    <h1 id="main-title" className="mainHeader__h1" title="">{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
    </header>
);

const Player = (props) => (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
            {props.playerName}
        </span>

        <Counter />
    </div>
);

class Counter extends React.Component {
    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score += 1,
            }
        });
    }
    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score -= 1,
            }
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
};

class App extends React.Component {
    state = {
        players: [
            {
                name: "Thomas",
                id: 1,
            },
            {
                name: "Chloe",
                id: 2,
            },
            {
                name: "Kurt",
                id: 3,
            },    
            {
                name: "Rhii",
                id: 4,
            },
        ],
    }

    handleRemovePlayer = id => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(player => player.id !== id)
            }
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="scoreboard" 
                    totalPlayers={this.state.players.length} 
                />
        
                {/* Players */}
                {this.state.players.map(player => {
                    return (
                        <Player 
                            playerName={player.name} 
                            id={player.id}
                            key={player.id.toString()}
                            removePlayer={this.handleRemovePlayer}
                        />
                    )
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);
