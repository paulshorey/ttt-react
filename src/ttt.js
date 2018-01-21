// @flow
import React, { Component } from "react";
import * as Styled from "./ttt.styled";



/*
	T, T, T
	* <button> each of the 9 X/O values
*/
class Td extends Component {
  render() {
    return (
      <Styled.Td onClick={this.props.onClick}>
				<span>{this.props.value}</span>
			</Styled.Td>
    );
  }
}
class Tr extends Component {
  render() {
    return <Styled.Tr>{this.props.children}</Styled.Tr>;
  }
}



/*
	GAME PLAY
	* keep track of player and squares
	* get 
*/
class Table extends Component {
  constructor() {
    super();
    this.state = { 
			playNext: {
				player: "X",
				squares: ["","","","","","","","",""]
			},
			winner: ""
		};
		this.state.gameHistory = [this.state.playNext];
	}
	
	handleMove(i){
		
		// prepare new state:
		const gameHistory = this.state.gameHistory;
		const playLast = gameHistory[gameHistory.length - 1];
		const playNext = Object.assign(playLast, { player: playLast.player==="X"?"O":"X" });
		playNext.squares[i] = playLast.player;
		gameHistory.push(playNext);
		
		// set state:
    if (calculateWinner(playNext.squares)) {

			// winner, stop!
			this.setState({
				playLast: playLast,
				gameHistory: gameHistory,
				winner: playLast.player
			});
			alert("Game over - "+playNext.player+" wins!");
		} else if (playNext.squares.indexOf("")===-1) {

			// no more empty squares, stop!
			this.setState({
				playLast: playLast,
				gameHistory: gameHistory
			});
		} else {

			// no winner, continue!
			this.setState({
				playNext: playNext,
				playLast: playLast,
				gameHistory: gameHistory
			});
		}		
	}
	renderSquare(i) {
    return (
      <Td
        value={this.state.playNext ? this.state.playNext.squares[i] : ""}
				onClick={()=>{this.handleMove(i)}}
      />
    );
	}
	renderButton(){

			// winner :)
		if (this.state.winner) {
			return <div>{this.state.playLast.player} wins!</div>;
		
			// it's a tie :|
		} else if (this.state.playLast && !this.state.playNext) {
			return <button>It's a tie -_-</button>;
		
			// next move
		} else if (this.state.playLast && this.state.playNext) {
			return <button>&laquo; undo {this.state.playLast.player}'s move</button>;
			
			// intro
		} else {
			return <div>Tic Tac Toe</div>;
		}
	}
  render() {
    return ([
      <Styled.Table key="Table"
				style={{
					height: this.props.cssWidthHeight,
					width: this.props.cssWidthHeight
				}}
			>
				<tbody>
					<Tr>
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</Tr>
					<Tr>
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</Tr>
					<Tr>
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</Tr>
				</tbody>
			</Styled.Table>,
			<Styled.TAction key="TAction">
				{this.renderButton()}
			</Styled.TAction>
		]);
	}
}



/*
	GAME WRAPPER
	* figure out the width/height of the contents of this element, or the maximum allowed width/height of container (the thing that's including this package)
*/
class TBoard extends Component {
  constructor() {
    super();
    this.state = { 
			cssWidthHeight: "100%"
		};
  }
  componentDidMount() {
		console.log('css',Math.min(this.TBoard.offsetHeight, this.TBoard.offsetWidth) + "px");
    this.setState({
      cssWidthHeight:
        Math.min(this.TBoard.offsetHeight, this.TBoard.offsetWidth) + "px"
    });
  }
  render() {
    return (
      <Styled.TBoard
				innerRef={element => {
					this.TBoard = element;
				}}
			>
        <Table cssWidthHeight={this.state.cssWidthHeight} />
			</Styled.TBoard>
		);
	}
}
export default TBoard;





/*
	HELPER FUNCTIONS
*/
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}