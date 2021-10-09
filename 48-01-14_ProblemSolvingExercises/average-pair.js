/**
 * averagePair receives a sorted array of numbers and a pair average. 
 * averagePair returns true when any two numbers in the array average to 
 * the value provided in pairAvg.
 * @param {*} arrNums 
 * @param {*} pairAvg 
 */
function averagePair(arrNums, pairAvg) {

    // thinking to look at pairAvg and immediately end with pairAvg is not 
    //  x, x.0, or x.5 -- average of 2 numbers can only result in a .0 or
    //  .5 decimal.
    // if the numbers are good, create a frequency object for arrNums and
    //  for each number in the arrNums array, subtract the current array 
    //  number from (pairAvg * 2) and see if that number is in the object.
    // Some considerations -- because the array is sorted, immediately end 
    //  processing when the first number in the current number in the array 
    //  is greater than the average because the array is sorted.

    // 4.1 * 2 = 8.2 --> invalid for a 2-number average. To test for decimal,
    //  (Floor(pairAvg * 2) / 2) === pairAvg

    if (((Math.floor(pairAvg * 2)) / 2 !== pairAvg) || (arrNums.length === 0)) {
        // It's a numbers thing. Any number divided by 2 is either a whole number
        //  or a whole number + 0.5
        // If that passes, well, we need numbers in arrNums too!
        return false
    }

    // build our frequency object - we need to know when a duplicate number may exist.

    const nbrTimes = {}
    arrNums.forEach(nbr => {
        nbrTimes[nbr] = nbrTimes[nbr] + 1 || 1;
    })

    // for each number in arrNums, going from smallest to largest, is the current number
    //  greater than the average? 
    // Yes - end the loop - the numbers after current are greater than or equal to current
    //  and can never average to a smaller number.
    let found = false;

    let nbr;
    for (let idx = 0; idx < arrNums.length; idx++) {
        nbr = arrNums[idx];

        if (nbr > pairAvg) return false;

        if (nbrTimes[(2 * pairAvg) - nbr]) {
            // a number was found that will satisfy the average. If this number is the same
            //  nbr, then make sure nbr appears at least twice
            if ((2 * pairAvg) - nbr === nbr) {
                if (nbrTimes[nbr] > 1) {
                    // we're done
                    found = true;
                    break;
                }
            } else {
                found = true;
                break;
            }
        }

    }

    return found;


}
