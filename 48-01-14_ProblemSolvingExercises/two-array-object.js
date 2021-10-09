// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrValues) {

    // return arrKeys.reduce((acc, idx) => {

    //     if (arrValues[idx]) {
    //         acc[arrKeys[idx]] = arrValues[idx];
    //     } else {
    //         acc[arrKeys[idx]] = null;
    //     }

    //     return acc;

    // }, {})

    const outObj = {};

    arrKeys.forEach((key, idx) => {
        if (arrValues[idx]) {
            outObj[key] = arrValues[idx];
        } else {
            outObj[key] = null;
        }
    })

    return outObj;

}