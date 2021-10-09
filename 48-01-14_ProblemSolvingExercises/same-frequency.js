/**
 * sameFrequency returns true when the digits in both int1 and int2 appear the 
 *  same number of times.
 * @param {*} int1 
 * @param {*} int2 
 */
function sameFrequency(int1, int2) {

    const numberFrequency = nbr => {

        const freq = new Map();
        let workNbr = nbr;
        let key;

        while (workNbr > 0) {
            key = workNbr % 10;
            freq.set(key, (freq.get(key) + 1) || 1);

            workNbr = Math.floor(workNbr / 10);
        }

        // const freq = {}
        // let workNbr = nbr;
        // let key;
        // while (workNbr > 0) {
        //     key = workNbr % 10;
        //     freq[key] = freq[key] + 1 || 1;

        //     workNbr = Math.floor(workNbr / 10);
        // }

        return freq;

    }

    const freqInt1 = numberFrequency(int1);
    const freqInt2 = numberFrequency(int2);

    if (freqInt1.size !== freqInt2.size) return false;

    for (const key of freqInt1.keys()) {
        if (freqInt2.has(key)) {
            if (freqInt2.get(key) !== freqInt1.get(key)) return false;
        } else {
            return false;
        }
    }

    return true;

}
