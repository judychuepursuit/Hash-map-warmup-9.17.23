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

// Hash map allows us to use an object in js - it is a data structure. Any coding language can implement a hash map, in js we use the {} (or object) 

// This ex gives us the frequency that the fruits appear on the list



/*
APPLE: 1
BANANA: 1 1
*/ 