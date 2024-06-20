function Gameboard() {
  const gameboard = [];
  const row = 3;
  const colum = 3;

  for (let i = 0; i < row; i++) {
    this.gameboard[i] = [];
    for (let j = 0; j < colum; j++) {
      this.gameboard[i].push(square());
    }
  }

  const getBoard = () => gameboard;

  const addMark = (row, player) => {
    const availableSquare = gameboard
      .filter((row) => row[colum].getValue() === 0)
      .map((row) => row[colum]);
  };
  if (!availableSquare.length) return;
  board[row][colum].addToken(player);

  const printBoard = () => {
    const boardWithSquars = gameboard.map((board) =>
      board.map((square) => square.getValue())
    );
    console.log(boardWithSquars);
  };

  return { printBoard, addMark, getBoard };
}
function square() {
  let value = 0;
  const addToken = (player) => {
    value = player;
  };
  const getValue = () => value;
  return { getValue, addToken };
}
function GameControlls(playerOne = "player One", playerTwo = "player Two") {
  const players = [
    {
      name: playerOne,
      token: X,
    },
    {
      name: playerTwo,
      token: O,
    },
  ];
  const activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  return { activePlayer };
}
const game = Gameboard();
game();
