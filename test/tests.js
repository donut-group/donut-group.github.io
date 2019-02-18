import cardWin from '../src/card-game.js';
const test = QUnit.test;

test('if player card is higher than opponent card, return true', function(assert) {
    const result = cardWin({ you: 2, opponent: 1 });
    const expected = true;

    assert.equal(result, expected);
});

test('if player card is lower than opponent card, return false', function(assert) {
    const result = cardWin({ you: 1, opponent: 2 });
    const expected = false;

    assert.equal(result, expected);
});