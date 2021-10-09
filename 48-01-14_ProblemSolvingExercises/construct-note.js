function buildFrequencyObject(inString) {

    const frequencyCounter = {};

    for (let idx = 0; idx < inString.length; idx++) {
        // frequencyCounter[inString[idx]] + 1 is undefined when the character is not 
        //  in the frequencyCounter object. When undefined, frequencyCounter for the 
        //  [inString[idx]] letter is set to 1.
        frequencyCounter[inString[idx]] = frequencyCounter[inString[idx]] + 1 || 1;
    }

    return frequencyCounter;

}

/**
 * constructNote determines whether the message string can get construsted with 
 *  the letters provided in letters. Function returns true when the message is 
 *  possible. Function assumes only lowercase letters are passed in both letters
 *  and message -- no special characters, numbers, spaces, or punctuation.
 * @param {*} message 
 * @param {*} letters 
 */
function constructNote(message, letters) {

    // frequency checks both ways -- message cannot contain more occurences of 
    //  a letter than in letters and message cannot contain letters that are not
    //  in letters.

    if (letters.length === 0) return false;

    const freqLetters = buildFrequencyObject(letters);
    const freqMessage = buildFrequencyObject(message);

    for (const key in freqMessage) {
        if (freqLetters[key]) {
            if (freqMessage[key] > freqLetters[key]) return false;
        } else {
            return false;
        }

        // if (Object.hasOwnProperty.call(object, key)) {
        //     const element = object[key];

        // }
    }

    return true;

}
