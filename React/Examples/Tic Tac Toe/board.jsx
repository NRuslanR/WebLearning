const React = require('react'),
      Square = require('./square.jsx'),
      calculateWinner = require('./calculateWinner.js');

class Board extends React.Component {
    
    renderSquare(i) {
      return <Square title={this.props.squares[i]} onClick={() => this.props.onClick(i) } />;
    }

    render() 
    {   
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );   
    }
}

module.exports = Board;