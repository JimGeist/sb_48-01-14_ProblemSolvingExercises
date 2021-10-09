// add whatever parameters you deem necessary
function isSubsequence(strMain, str2) {
    /*
    Write a function called isSubsequence which takes in two strings and checks 
    whether the characters in the first string form a subsequence of the characters 
    in the second string. In other words, the function should check whether the 
    characters in the first string appear somewhere in the second string, without 
    their order changing.

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)

    The countPairs cleared some mental blockages on this one.
    Need to loop over the first string and the second loop needs to start at the 
    beginning of the second string.
    The first time the current character from the first loop is found in the 
    second string, the next iteration of checking the second string begins
    at the next character
    */

    const arrMain = [...(strMain.toLowerCase())];
    const arrSec = [...(str2.toLowerCase())];

    let found = false;
    let idxSecStart = 0
    for (let idxMain = 0; idxMain < arrMain.length; idxMain++) {
        // reset found to false. It is set to true when the char in Main is found in
        //  sec. 
        found = false;
        for (idxSec = idxSecStart; idxSec < arrSec.length; idxSec++) {
            if (arrSec[idxSec] === arrMain[idxMain]) {
                // we found the character from Main in Sec. On the next 
                //  iteration, we need to start looking from the char at idxSec + 1
                idxSecStart = idxSec + 1;
                found = true;
                break;
            }
        }
        if (!(found)) {
            // end the Main / outer loop, the current char was not found in the 
            //  second array.
            break;
        }
    }

    return found;

}
