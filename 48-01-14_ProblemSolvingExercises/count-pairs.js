// add whatever parameters you deem necessary
function countPairs(numbers, pairTotal) {
    /*
    Given an array of integers, and a number, find the number of pairs of integers in 
    the array whose sum is equal to the second parameter. You can assume that there will 
    be no duplicate values in the array.

    countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
    3,1
    3,5
    3,4
    3,2
    1,5
    1,4
    1,2
    5,4
    5,2
    4,2
    
    countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
    countPairs([4,6,2,7], 10) // 1 (4,6)
    countPairs([1,2,3,4,5], 10) // 0
    countPairs([1,2,3,4,5], -3) // 0
    countPairs([0,-4],-4) // 1
    countPairs([1,2,3,0,-1,-2],0) // 2

    dual index, outer is start through (len - 1)
    inner is (outer start idx + 1) through len
    */

    let nbrOfPairs = 0;

    for (let idxOuter = 0; idxOuter < (numbers.length - 1); idxOuter++) {
        for (let idxInner = idxOuter + 1; idxInner < numbers.length; idxInner++) {
            if ((numbers[idxOuter] + numbers[idxInner]) === pairTotal) nbrOfPairs++;
        }
    }

    return nbrOfPairs;

}
