if (typeof window !== 'undefined') {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-btn');
    const resetButton2 = document.getElementById('reset-btn2');
    const winningMessageElement = document.getElementById('winningMessage')
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    resetButton.addEventListener('click', resetGame);
    resetButton2.addEventListener('click', resetGame);

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

    function resetGame() {
        winningMessageElement.classList.remove('show')
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        cells.forEach(cell => cell.textContent = '');
    }
}
