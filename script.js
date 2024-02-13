
//Load HTTP module
const http = require("http");
const {fileURLToPath} = require("node:url");
const hostname = "127.0.0.1";
const port = 3000;
const path = 'index.html';

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    // res.setHeader("Content-Type", "application/javascript");
    res.setHeader("Content-Type", "text/html");

    res.body.loc = fileURLToPath('index.html');
    // res.body.loc = 'file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html';
    //
    // fileURLToPath('index.html');
    // http.
    // req.
    res.end();



  // res.response.send('index.html');
  // res.response.send('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');
  res.end();

  // res.
  // response.sendFile('absolutePathToYour/htmlPage.html');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, path, () => {
    // console.log(`Server running at http://${hostname}/${path}:${port}`);
    // console.log(`Server running at http://${hostname}:${port}/${fileURLToPath('index.html')}`);
});

if (typeof window !== 'undefined') {
  const board = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const resetButton = document.getElementById('reset-btn');
  const resetButton2 = document.getElementById('reset-btn2');
  const winningMessageElement = document.getElementById('winningMessage')
  const winningMessageTextElement = document.querySelector('[data-winning-message-text]')


  let currentPlayer = 'X';
  let gameBoard = ['', '', '', '', '', '', '', '', ''];


  function checkWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return !!(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]);

    });
  }

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          // alert(`${currentPlayer} wins!`);
          // winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
          winningMessageTextElement.innerText = `${currentPlayer} wins!`
          winningMessageElement.classList.add('show')
          // resetGame();
        } else if (gameBoard.every(cell => cell !== '')) {
          // alert("It's a draw!");
          winningMessageTextElement.innerText = 'Draw!'
          winningMessageElement.classList.add('show')
          // resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });


  resetButton.addEventListener('click', resetGame);
  resetButton2.addEventListener('click', resetGame);


  function resetGame() {
    winningMessageElement.classList.remove('show')
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
  }
}


