/**
 * averagePair receives a sorted array of numbers and a pair average. 
 * averagePair returns true when two numbers in the array average to 
 * the value provided in pairAvg.
 * @param {*} arrNums 
 * @param {*} pairAvg 
 */
function averagePairAttempt1(arrNums, pairAvg) {

    if (arrNums.length === 0) return false;

    // processing 'short circuits' -- both numbers are less than pairAvg
    //  OR both numbers are greater than pairAvg.

    let idxEnd = arrNums.length - 1;
    let idxStart = 0;
    let currAvg = 0;
    while (idxStart < idxEnd) {
        avgCurr = ((arrNums[idxStart] + arrNums[idxEnd]) / 2);
        if (currAvg === pairAvg) return true;
        if (currAvg < pairAvg) {
            // increase the starter index to get the next larger number
            idxStart++;
        } else {
            idxEnd--;
        }
    }
    return false;

}
