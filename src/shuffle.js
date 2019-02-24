//This is a lovely shuffling function but untested.
//I believe Ali mentioned that he found it on Stack Overflow.
//In future for these projects please make sure to generate your own algorithms,
//or at least pin them down with tests to ensure that they do what 
//you think they do.

function shuffle(array) {
    let counter = array.length;
    while(counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        // minor quibble but watch out for white space
        // between your array and bracket notation below
        // apparently it doesn't get linted
        array [counter] = array[index];
        array[index] = temp;
    }
    return array;
}

export default shuffle;