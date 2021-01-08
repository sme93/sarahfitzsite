---
title: "Day 3"
---
Continued learning about functions on Codecademy this morning, specifically about the scope of
values and functions. Combined with learning about arrow functions yesterday, I decided it would be
good practice if I changed all of my functions in my "Speckled Frogs" code to arrow functions.

My code
originally looked like this...

```JS
function jumpInPool() {
  console.log("One jumped in the pool where its nice and cool,");
}

function eatingBugs(numberOfFrogs) {
  console.log(numberOfFrogs + " speckled frogs sat on a log eating some most delicious bugs.");
}

function speckledFrog(numberOfFrogs) {
  return (numberOfFrogs - 1) + " speckled frog";
}

function tenSpeckledFrogs(startingNumber) {
  for (let i = startingNumber; i >= 1; i--) {
    if (i >= 3) {
      eatingBugs(i);
      console.log("One jumped in the pool where its nice and cool, then there were " + speckledFrog(i) + "s.");
      console.log("");
    }
    if (i === 2) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there was " + speckledFrog(i) + ".");
      console.log("");
    }
    if (i === 1) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there were no more speckled frogs!");
    }
  }
}

tenSpeckledFrogs(10);
tenSpeckledFrogs(15);
```
and I turned it into this...

```JS
const jumpInPool = () => {
  console.log("One jumped in the pool where its nice and cool,");
}
const eatingBugs = (numberOfFrogs) => {
  console.log(numberOfFrogs + " speckled frogs sat on a log eating some most delicious bugs.");
}
const speckledFrog = (numberOfFrogs) => {
  return (numberOfFrogs - 1) + " speckled frog"
}

const tenSpeckledFrogs = (startingNumber) => {
  for (let i = startingNumber; i >= 1; i--) {
    let speckledFrogsOutput = "";
    console.log(speckledFrogsOutput);
    if (i >= 3) {
      speckledFrogsOutput += eatingBugs(i);
      console.log("One jumped in the pool where its nice and cool, then there were " + speckledFrog(i) + "s.");
    }
    if (i === 2) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there was " + speckledFrog(i) + ".");
    }
    if (i === 1) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there were no more speckled frogs!");
    }
  }
}

tenSpeckledFrogs(4);
```
Today I was listening to Thundercat while I was learning and coding. Happy Friday.
