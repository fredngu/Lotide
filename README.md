# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fredngu/lotide`

**Require it:**

`const _ = require('@fredngu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

countLetters(sentence): Counts the occurence of every letter in a sentence.

countOnly(allItems, itemsToCount): Count items in array if it exists in array and is required to be counted.

findKey(object, callback): Find key in object based on its value === callback function given.

findKeyByValue(object, valueName): Finds a key based on its value in an object.

flatten(array): Combines all arrays within an array into one final array.

head(array): Returns the first element in an array.

letterPositions(sentence): Returns an object with the letters of a sentence and it's position/index in that sentence.

map(array, callback): Applies callback function to all elements in the array.

middle(array): Returns the middle elements of an array.

tail(array): Returns all the elements in an array besides the first element.

takeUntil(array, callback): Returns each element of an array until callback function becomes true.

without(source, itemsToRemove): Returns a new array with the items indicated removed.


