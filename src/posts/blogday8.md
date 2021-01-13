---
title: "Day 8"
---
import Layout from "../components/layout"

<Layout>

Started learning about iteration methods this afternoon on Codecademy. Array iteration methods operate on every array item. The three that I learned about and practiced with today were the .forEach(), .map(), and .filter() methods.

The .forEach() method calls a function once for each array element.

```JS
var singerSongwriters = ["Elvis Costello", "Bob Dylan", "Aimee Mann"];

singerSongwriters.forEach((singer => {
  console.log(singer + " is one of my favorite songwriters.");
}));
 // output:
//Elvis Costello is one of my favorite songwriters.
//Bob Dylan is one of my favorite songwriters.
//Aimee Mann is one of my favorite songwriters.
```
Next I learned about the .map() method, which when called on an array will take an argument of a callback function and then returns a new array. Here is the .map() method in action.

```JS
var favoriteBands = ["descendents", "pixies", "wipers"];

favoriteBands.map((band => {
  console.log(band.toUpperCase());
}))

//output:
//DESCENDENTS
//PIXIES
//WIPERS
```
The .filter() method returns an array of elements after filtering out certain elements from the original array. The callback function should return true or false depending on the element that is passed to it. Here is an example of the .filter() method.
```JS
var favoriteBands = ["Descendents", "Elvis Costello and the Imposters", "Pixies", "Pup", "Charly Bliss"];

var favoriteShortBandNames = favoriteBands.filter((band => {
  return band.length < 7;
}))
console.log(favoriteShortBandNames);

//output [ 'Pixies', 'Pup' ]
```
Notice how I logged this differently from my .map() example and got an array instead of just the strings inside the array. Hmmmm.

Another thing I worked on this afternoon was turning an integer into a string in my 10 speckled frogs code. I used my super simplified OG 10 speckled frogs code without any functions to turn all the numbers to the actual words of one, two, three etc. Check it out.
```JS
var numbersAsStrings = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
for (var i = 10; i >= 1; i--) {
  if (i >= 3) {
    console.log(numbersAsStrings[i -1] + " speckled frogs sat on a log eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool, then there were " + numbersAsStrings[i - 2] + " speckled frogs.");
    console.log("");
  }
  if (i === 2) {
    console.log(numbersAsStrings[i - 1] + " speckeled frogs sat on a log eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there was " + numbersAsStrings[i - 2] + " speckled frog");
    console.log("");
  }
  if (i === 1) {
    console.log(numbersAsStrings[i - 1] + " speckled frog sat on a log eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there were no more speckled frogs.");
  }
}
//output
//Ten speckled frogs sat on a log eating some most delicious bugs.
// One jumped in the pool where its nice and cool, then there were Nine speckled frogs.
//
// Nine speckled frogs sat on a log eating some most delicious bugs.
// One jumped in the pool where its nice and cool, then there were Eight speckled frogs.

//etc etc etc
```
I listened to Saint Cloud by Waxahatchee while I was coding. See you tomorrow.
</Layout>
