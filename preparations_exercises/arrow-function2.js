// The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = () => ({
    level: 1,
    score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);


// let initGame = () => {
//   level: 1,
//   score: 0
// };

// The reason is that the JavaScript engine does not interpret a statement starting with a brace as an object literal, but as a block statement. So if you want to force it to treat the statement as an object literal, you need to make sure that the statement doesn't start with a brace. The easiest way to do this, without changing the meaning or behavior of the statement, is by adding parentheses.