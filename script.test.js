import {assert, test} from 'vitest';


const {checkWinner} = import('.//script.js');

// import {checkWinner} from './script.js';

// print(checkWinner, true);
//console.log(checkWinner);
//console.log('hekllo');


test('Check winner - X wins', () => {
  console.log(hi);
console.log('hekllo');
  const gameBoard = ['X', 'X', 'X', '', '', '', '', '', ''];
  assert.equal(checkWinner(gameBoard), true);
});

test('Check winner - O wins', () => {
  const gameBoard = ['O', 'X', 'O', '', 'X', '', '', '', 'O'];
  assert.equal(checkWinner(gameBoard), true);
});

test('Check winner - No winner', () => {
  const gameBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  assert.equal(checkWinner(gameBoard), false);
});
