# sb_48-01-14_ProblemSolvingExercises

Assignment involved problem solving using Frequency Counters and Multiple Pointers problem solving patterns. The problems were fairly straight forward. The only harrowing thing at times is the thought of well, what would this look like if I was solving this problem with an audience. The **Further Study** problems were not attempted.

Overall, it felt good to get some of the solutions, the timing behind them is a concern. There were a few cases where the solution became evident after stepping throught he code in the browser and not in the actual code.


## arrayRotate
Write a function called `arrayRotate` which accepts an array and the amount of times the elements need to shift to the right. How could I not try this one after our mentoring call?

Examples:
```
arrayRotate(["a", "b", "c"], 1) // ["c", "a", "b"]
arrayRotate(["a", "b", "c"], 8) // ["b", "c", "a"]
```

### Timing and observations:
** Time to Complete **: 64 minutes

The logic went together quickly, I guess toooo quickly. The test failed because it was rotating left, not right. And when I was working out the test for to adjust the index, I did not even notice I was shifting in the wrong direction. Time was lost fixing the mistake. I resisted the urge to simply change 'shift right' to 'shift left' in the description because I would have been done in ~30 minutes!


## constructNote
Write a function called `constructNote`, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints: Time Complexity: O(M + N) - If M is the length of message and N is the length of letters.

Examples:
```
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
```

### Timing and observations:
** Time to Complete **: 28 minutes

I need to take the time to read the problem and look at the test cases. The parameters were reversed on my function and I did not check for empty string.


## averagePair

Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints: Time Complexity: O(N)

Examples:
```
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```

### Timing and observations:
** Time to Complete **: 111 minutes

The first iteration (34 minutes) did not pass all the tests. I moved on to other problems then return. I totally abandoned my initial code which was trying too hard to force the problem into a dual pointer. The second approach (77 minutes) focused on logic -- using the average of two numbers formula, determine what the second number should be (first number supplied by processing each number in the source array). To help the solution, a frequency object was created to quickly see if the second number ((avg * 2) - currentArrayNumber) existed in the array. The solution worked, but over an hour to solve would probably not be acceptable.



## twoArrayObject

Write a function called `twoArrayObject` which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

Examples: 
```
twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
```

### Timing and observations:
** Time to Complete **: 18 minutes


## sameFrequency

Write a function called `s`ameFrequency`. Given two positive integers, find out if the two numbers have the same frequency of digits.

Constraints: Time Complexity - O(N + M)

Examples:
```
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
```

### Timing and observations:
** Time to Complete **: 58 minutes

The solution was just marred with mistakes. `/` and `%`, division and modulos, were used -- mod 10 for the 'key' and division by 10 to effectively shift the number. `Math.floor(nbr / 10)` was not correctly saved and I thought it was an issue with the `Map` used for the frequency counter. The code was changed to use a straight object and that was when the incorrect save of `Math.floor(nbr / 10)` was discovered. Also mixed up code and tried the Python add a default value on the get -- freq.get(key, 0) -- use 0 if the key is not found.



## separatePositive

Write a function called `separatePositive` which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

Constraints: Time Complexity: O(N)

Examples:
```
separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
```


### Timing and observations:
** Time to Complete **: 71 minutes

Really frustrated on this one. The code worked, displaying the results via console logs showed everything working correctly. The problem was Jasmine expected the array to get returned. The array was getting altered correctly, it just needed to get returned.


## isSubsequence

Write a function called `isSubsequence` which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Constraints: Time Complexity - O(N + M)

Examples:
```
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
```

### Timing and observations:
** Time to Complete **: 48 minutes

No clue on this one. Read it a few times and just had no idea how to approach it. I moved on to countingPairs and that problem cleared the mental blockage I was experiencing.


## countPairs

Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Constraints: Time Complexity either O(N * log(N)) or O(N)

Examples:
```
countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
```

### Timing and observations:
** Time to Complete **: 22 minutes

It helped to take the sample data and write down all the possible pairs and how to optimally use 2 indexes.


