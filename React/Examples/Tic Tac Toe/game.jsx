const React = require('react'),
      Board = require('./board.jsx'),
      calculateWinner = require('./calculateWinner.js');

class Game extends React.Component {

    constructor(props)
    {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      }
    }

    handleClick(i)
    {
      const history = this.state.history.slice(0, this.state.stepNumber + 1),
            current = history[history.length - 1];

      var squares = current.squares;

      if (squares[i] || calculateWinner(squares)) return;

      squares = squares.slice();

      squares[i] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        history: history.concat(
        [
          {
            squares: squares
          }
        ]
        ),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
      
    }

    render() {

      const history = this.state.history,
            current = history[this.state.stepNumber],
            squares = current.squares,
            winner = calculateWinner(squares),
            moves = this.calculateMoves(history);

      const status = winner ? `${winner} is winner` : `Next Player is ${this.state.xIsNext ? 'X' : 'O'}`;

      return (
        <div className="game">
          <div className="game-board">
            <Board squares={squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
          </div>
        </div>
      );
    }

    calculateMoves(history)
    {
      return history.map((squares, step) => {

        const backStepRef = step ? `Go To Step ${step}` : 'Go To Begin';

        return 
          <li key={step}>
            <button onClick={() => this.goToStep(step)}>{backStepRef}</button>
          </li>
      });
    }

    goToStep(step)
    {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }
  }

module.exports = Game;