
function arrayRotate(arr, rotationAmountIn) {

    // shifts / rotates the elements in array arr right the number of times indicated 
    //  by rotationAmount.
    const arrRotated = [];

    if ((arr.length > 0) && (rotationAmountIn > 0)) {
        // normalize the rotation amount based on the length of the array.
        let rotationAmount = rotationAmountIn % arr.length;
        let idxSrc = 0;
        for (let idx = 0; idx < arr.length; idx++) {
            idxSrc = idx - rotationAmount;
            if (idxSrc < 0) {
                idxSrc = idxSrc + arr.length;
            }
            // a    b    c       rotationIn = 1, rotAmt = 1
            // c    b    a
            // c                 idx = 0, rotAmt = 1, idxSrc = 2 -> idx - rotAmt = 0 - 1 (+3 via then)
            // c    a            idx = 1, rotAmt = 1, idxSrc = 0      1  -  1      n/a
            // c    a    b       idx = 2, rotAmt = 1, idxSrc = 1      2  -  1      n/a

            arrRotated[idx] = arr[idxSrc];
        }

    }

    return arrRotated;

}
