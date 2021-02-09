---
title: "Day 33"
---
import Layout from "../components/layout"

<Layout>

I am going to post my code and get off the computer. I learned a little bit more about array prototype methods tonight and then practiced using them with for loops.

Here's what I wrote on rep.l -

```JS
var animals = ['hedgehogs', 'echidnas', 'koalas', 'chinchillas', 'wombats', 'toucans', 'geckos'];

// 1. Create a function that contains a for loop that prints each animal to the console in a sentence that reads "hedgehogs are cute", "echidnas are cute", etc
function printAnimal() {
  for (var i = 0; i < animals.length; i++) {
    console.log(`${animals[i]} are cute.`);
  }
}
printAnimal();
//output
// geckos are cute.
// hedgehogs are cute.
// echidnas are cute.
// koalas are cute.
// chinchillas are cute.
// wombats are cute.
// toucans are cute.
// geckos are cute.

// 2. Create a function that contains a for loop that edits each element of the array to remove the last "s" of each string
function removeS() {
  for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].slice(0, -1));
  }
}
removeS();
// output -
// hedgehog
// echidna
// koala
// chinchilla
// wombat
// toucan
// gecko

// 3. Create a function that contains a for loop that edits each element of the array, capitalizing each animal name string
function capitalizeWord() {
  for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].charAt(0).toUpperCase() + animals[i].slice(1));
  }
}
capitalizeWord();
// output -
// Hedgehogs
// Echidnas
// Koalas
// Chinchillas
// Wombats
// Toucans
// Geckos

// 4. Create a function that returns an array that only contains the animals whose names are 6 letters or less
function shortNames() {
  var shortNamesArray = [];
  for (var i = 0; i < animals.length; i++) {  
    if (animals[i].length <= 6) {
     shortNamesArray.push(animals[i]);
    }
  }

  return shortNamesArray
}
shortNames();

//output - [ 'koalas', 'geckos' ]
```

I listened to Face Stabber by Thee Oh Sees while I was coding 👍🏼

</Layout>
