const {test, expect} = require('@playwright/test');

// test('Tic Tac Toe Gameplay', async ({ page  }) => {
//   await page.goto('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');
//
//   await page.waitForLoadState('networkidle');
//
//   // Click on the cells to play the game
//   await page.click('#cell-0');
//   await page.click('#cell-1');
//   await page.click('#cell-3');
//   await page.click('#cell-4');
//   await page.click('#cell-6');
//
//   // Check if X wins
//   const xWinsText = await page.textContent('.winning-message');
//   expect(xWinsText).toContain('X wins!');
//   // Reset the game
//   // await page.click('.cell'); // Click any cell to reset the game
//
// });

// test('Tic Tac Toe Gameplay', async ({ page  }) => {
//   await page.goto('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');
//
//   await page.waitForLoadState('networkidle');
//
//   // Click on the cells to play the game
//   await page.click('#cell-0');
//   await page.click('#cell-1');
//   await page.click('#cell-3');
//   await page.click('#cell-4');
//   await page.click('#cell-6');
//
//   // Check if X wins
//   const xWinsText = await page.textContent('.winning-message');
//   expect(xWinsText).toContain('X wins!');
//   // Reset the game
//   // await page.click('.cell'); // Click any cell to reset the game
//
// });

test.describe('Tic Tac Toe Gameplay', () => {
    // test.beforeEach(async ({ page }) => {
    //   // Go to the starting url before each test.
    //   await page.goto('https://playwright.dev/');
    // });

    test('X wins', async ({page}) => {
        await page.goto('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');

        await page.waitForLoadState('networkidle');

        // Click on the cells to play the game
        await page.click('#cell-0');
        await page.click('#cell-1');
        await page.click('#cell-3');
        await page.click('#cell-4');
        await page.click('#cell-6');

        // Check if X wins
        const xWinsText = await page.textContent('.winning-message');
        expect(xWinsText).toContain('X wins!');
        // Reset the game
        // await page.click('.cell'); // Click any cell to reset the game

        // await page.click('#reset-btn2');
        //
        // // Wait for the board to reset
        // page.waitForFunction(() => document.querySelectorAll('.cell').forEach(cell => cell.textContent === ''));
        //
        // // Assert that all cells are empty after resetting
        // const cellContents = await page.$$eval('.cell', cells => cells.map(cell => cell.textContent));
        // expect(cellContents.every(content => content === '')).toBeTruthy();

    });

    // test('Reset game', async ({page}) => {
    //     await page.goto('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');
    //
    //   // Click the reset button
    //   await page.click('#reset-btn2');
    //
    //   // Wait for the board to reset
    //   await page.waitForFunction(() => document.querySelectorAll('.cell').every(cell => cell.textContent === ''));
    //
    //   // Assert that all cells are empty after resetting
    //   const cellContents = await page.$$eval('.cell', cells => cells.map(cell => cell.textContent));
    //   expect(cellContents.every(content => content === '')).toBeTruthy();
    //
    // });
});

// test('Reset Game Test', async ({ page }) => {
//     await page.goto('file:///home/nicole/Code/JavaScript/tic-tac-toe/index.html');
//     await page.waitForLoadState('networkidle');
//
//     // Click on some cells to start the game
//     await page.click('#cell-0');
//     await page.click('#cell-1');
//     await page.click('#cell-3');
//     await page.click('#cell-4');
//     await page.click('#cell-6');
//
//     // Click the reset button
//     await page.click('#reset-btn2');
//
//     // Wait for the board to reset
//     await page.waitForFunction(() => document.querySelectorAll('.cell').forEach() (cell => cell.textContent === ''));
//
//     // Assert that all cells are empty after resetting
//     const cellContents = await page.$$eval('.cell', cells => cells.map(cell => cell.textContent));
//     expect(cellContents.every(content => content === '')).toBeTruthy();
// });



