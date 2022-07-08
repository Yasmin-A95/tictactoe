const boardState = require('./rules');

// test('boardState should not be nil', () => {
//     expect(boardState).toNotBe(nil)
// })

describe('boardState on new game', () => {
    test('is full of *', () => {
        const testBoardState = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
        expect(boardState).toEqual(testBoardState);
    });
});