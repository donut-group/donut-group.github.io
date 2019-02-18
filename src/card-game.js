function cardWin(yourCard, theirCard) {
    if(yourCard > theirCard) {
        return true;
    }
    if(yourCard < theirCard) {
        return false;
    }
}

export default cardWin;