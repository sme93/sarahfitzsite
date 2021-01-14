---
title: "Day 9"
---
import Layout from "../components/layout"

<Layout>

Today I continued learning and practicing with iterators. The Codecademy lesson was notably pretty cool since the last exercise was just finding the right iterators for the result they wanted. Neat-o.

The .findIndex() method will return *the index* of the first occurrence of the element, and if the element doesn't exist it will return -1.

```JS
var favoriteHikes = ["Sky Pond", "Isabelle Glacier", "Chasm Lake", "Crystal Lakes", "Frozen Lake", "Greyrock"];

var startsWithF = favoriteHikes.findIndex(hike => {
  return hike.charAt(0) === "F";
})
console.log(startsWithF);

//output 4

var findShortNamesHikes = favoriteHikes.findIndex(hike => {
  return hike.length < 9;
})
console.log(findShortNamesHikes);

//output 0
```

The .reduce() method is used to reduce the array to a single value. It executes from left-to-right through each value in the array and returns a single value. It will iterate through each element in the array as a for loop.  

```JS
var numbersToAdd = [7, 21, 32];

var sumOfNumbersToAdd = numbersToAdd.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(sumOfNumbersToAdd);
//output = 60
```
If we wanted to add the numbers in the array above together and then add 100 to that number it would look like this -
```JS
var sumOfNumbersToAdd = numbersToAdd.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)
console.log(sumOfNumbersToAdd);
//output 160
```
The .some() method tests if some of the elements in the array pass a condition. It will return a boolean.

```JS
var favoriteHikes = ["Sky Pond", "Isabelle Glacier", "Chasm Lake", "Crystal Lakes", "Frozen Lake", "Greyrock"];

console.log(favoriteHikes.some((hike) => {
  return hike.length < 9;
}));
//output true
```
Ok! Tomorrow we are going to do the Objects lesson, which is kindof exciting!

While I was learning and coding I listened to Dave Brubeck and this really great podcast about Covid-19 vaccines called *ologies* with Alie Ward.

</Layout>
