// const { test, assert } = import('vitest');
import {assert, test} from 'vitest';


// const { checkWinner } = import('./script');

// import { checkWinner } from './script';
const { checkWinner } = import('./script');

  test('Check winner - X wins', () => {
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

