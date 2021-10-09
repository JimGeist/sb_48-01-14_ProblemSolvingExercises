// add whatever parameters you deem necessary
function separatePositive(arrNbrs) {

    let idxStart = 0;
    let idxEnd = arrNbrs.length - 1;
    let hold;

    while (idxStart < idxEnd) {

        if (arrNbrs[idxStart] < 0) {
            if (arrNbrs[idxEnd] < 0) {
                idxEnd--;
            } else {
                // swap numbers at start and end indexes
                hold = arrNbrs[idxStart];
                arrNbrs[idxStart] = arrNbrs[idxEnd];
                arrNbrs[idxEnd] = hold;
                // end has a negative value, decrement the end index
                idxEnd--;
                // start has a positive value, increment start index
                idxStart++;
            }

        } else {
            idxStart++;
        }

    }

    return (arrNbrs);
}
