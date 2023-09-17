// Write a function that takes in an array, and returns the thing that appears most frequently in the array. If more than one thing appears the same number of times, return one of the most frequently sppesring things. The array will not be empty.

// for example:
// findMostCommonItem(["apple", "banana", "pear", "banana", "pear","lime", "lemon", "pear", "banana"])

// Would return either "banana" or "pear", because those are the two things that appear the most frequently.

const fruits = ["apple", "banana", "pear", "banana", "pear","lime", "lemon", "pear", "banana"]

const findMostCommonItem = (arr) => {
    //  this is a hash map
    let frequencyMap = {}
    for (const item of arr) {
        if (frequencyMap[item]) {
            frequencyMap[item] += 1 
//  can use ++ in place of +=1
        } else {
            frequencyMap[item] = 1 
        }
    }
    let winnerSoFar = 0
    let winnerSoFarName = null
    for (const key in frequencyMap) {
        if (frequencyMap[key] > winnerSoFar) {
            winnerSoFar = frequencyMap[key]
            winnerSoFarName = key
        }
    }
    console.log(frequencyMap)
    return winnerSoFarName
 }

console.log(
findMostCommonItem(fruits)
);

// NOTES FROM JOHN:
// BRACKET NOTATION: 2 ways to add a new key, value pair
// let object = {}
// using the dot method
//     object.color = "red"
// using the [] method called @ requires ""
//     object["color"] = "red"

// key value pairs
// key= a, value = 1
// a: 1

// note: line 21-  let winnerSoFar = 0
// "0" is actually not the lowest number, but for this ex "0" is fine. We could add -infinity which = the lowest number.

// Hash map (hash table, a hash)allows us to use an object in js - it is a data structure. It is used to count values or keep track of them. It is an object with key value pairs. Normally are numbers or booleans or sometimes just true. (counting up).

// Hash maps are very efficient:
{apple: 1, banana: 3, pear: 3, lime: 1, lemon: 1}
apple: 1
banana: 3
lemon: 1
lime: 1
pear: 3

// Any coding language can implement a hash map, in js we use the {} (or object) 

// This ex gives us the frequency that the fruits appear on the list

/*
APPLE: 1
BANANA: 3
PEAR: 3
LIME: 1
LEMON: 1
*/ 