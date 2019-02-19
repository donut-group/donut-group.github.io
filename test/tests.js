import cardWin from '../src/card-game.js';
const test = QUnit.test;
// if the suit is red, highest card wins




test('if player card is red and higher than opponent card, return true', function(assert) {
    const yourCard = {
        number: 2,
        suit: 'red'
    };
    const opponentCard = {
        number: 1,
        suit: 'red'
    };

    const result = cardWin(yourCard, opponentCard);
    const expected = true;

    assert.equal(result, expected);
});

test('if player card is red and lower than opponent card, return false', function(assert) {
    const yourCard = {
        number: 1,
        suit: 'red'
    };
    const opponentCard = {
        number: 2,
        suit: 'red'
    };

    const result = cardWin(yourCard, opponentCard);
    const expected = false;

    assert.equal(result, expected);
});

test('if player card is blue and higher than opponent card, return false', function(assert) {
    const yourCard = {
        number: 2,
        suit: 'blue'
    };
    const opponentCard = {
        number: 1,
        suit: 'blue'
    };
    
    const result = cardWin(yourCard, opponentCard);
    const expected = false;
    
    assert.equal(result, expected);
});

test('if player card is blue and lower than opponent card, return true', function(assert) {
    const yourCard = {
        number: 1,
        suit: 'blue'
    };
    const opponentCard = {
        number: 2,
        suit: 'blue'
    };
            
    const result = cardWin(yourCard, opponentCard);
    const expected = true;
            
    assert.equal(result, expected);
});