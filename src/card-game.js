function cardWin(yourCard, opponentCard) {
    if(yourCard.suit === 'red') {
        if(yourCard.number > opponentCard.number) {
            return true;
        }
        if(yourCard.number < opponentCard.number) {
            return false;
        }
    }

    if(yourCard.suit === 'blue') {
        if(yourCard.number > opponentCard.number) {
            return false;
        }
        if(yourCard.number < opponentCard.number) {
            return true;
        }
    }

}
export default cardWin;