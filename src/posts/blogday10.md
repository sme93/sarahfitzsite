---
title: "Day 10"
---
import Layout from "../components/layout"

<Layout>

Day 10! I'm 1/10 of the way through my challenge, I guess. Woohoo.

I started the Objects lessons on Codecademy today.

Objects can be assigned to variables and are filled with unordered data. The data is organized by key-value pairs, or an identifier. Here is my desk written as an object literal.

```JS
var myDesk = {
  design: "Mid Century Modern",
  drawers: 3,
  color: "brown",
};
```
There are two different ways to access the properties of object literals - dot notation and bracket notation.

```JS
var myDeskDesign = myDesk.design
console.log(myDeskDesign);
//output: Mid Century Modern

var myDeskColor = myDesk["color"];
console.log(myDeskColor);
// output: brown
//remember to make our property name a string if you use bracket notation.
```
We can update objects by adding new properties, changing existing properties or deleting properities.

```JS
var myDesk = {
  design: "Mid Century Modern",
  drawers: 3,
  color: "brown",
};

myDesk.color = "mahogany";
myDesk.standing = false;
delete myDesk.drawers;

console.log(myDesk);
//output: { design: 'Mid Century Modern', color: 'mahogany', standing: false }
```
We can include methods in our object literals by creating key-value pairs. The key is our method name and the value is an anonymous function expression.

```JS
var getReadyForSchool = {
  clean() {
  console.log("Your desk is clean and ready for school!")
  }
};

getReadyForSchool.clean();
//output: Your desk is clean and ready for school!
```
Nested objects - an object with another object as a property, which could have a property that's an array of more objects. Yikes.

```JS
var myDesk = {
  design: "Mid Century Modern",
  drawers: 3,
  color: "mahogany",
  standing: false,
  decoration: {
    "troll doll": {
      hairColor: "blonde",
      eyeColor: "amber",
      shirtColor: "green",
    },
      babyYoda: {
    },
  computerComponents: ["Macbook", "LG screen", "headphones"]
  }
};
//access the shirt color of the troll doll
var trollShirt = myDesk.decoration["troll doll"].shirtColor;
console.log(trollShirt);
//output: green

//access LG screen
var secondComponent = myDesk.decoration.computerComponents[1];
console.log(secondComponent);
//output: LG screen

```
We can use functions to permanently change the properties of our objects.

```JS
var paintTheDesk = myDesk => {
  myDesk.color = "ruby red"
};

paintTheDesk(myDesk);
console.log(myDesk.color);
//output: ruby red
```
And last thing for the day is looping through objects. A for...in loop will execute a given block of code for each property in an object.
```JS
var traderJoes = {
    crew: {
    captain: {
        name: "Jason",
        workEthic: "stands with clipboard",
        speak: () => { console.log("I'm an idiot!") }
        },
    firstMate: {
        name: "Vernon",
        workEthic: "throws big loads",
        agree: () => { console.log('I agree, captain!') }
        },
    musician: {
        name: "Stephanie",
        workEthic: "knows all the cords",
        brag: () => { console.log("I only talk about how I know how to play the guitar!") } },
    lackie: {
        name: "Sussman",
        workEthic: "smokes a lot",
        marlboroTime: () => { console.log("Taking a smoke break, brb!") }
        }
    }
};
for (let crewMember in traderJoes.crew) {
  console.log(`${traderJoes.crew[crewMember].name}:${traderJoes.crew[crewMember].workEthic}`);
}

//output:
//Jason: stands with clipboard
//Vernon: throws big loads
//Stephanie: knows all the cords
//Sussman: smokes a lot


//I was getting a string as my output because those are backticks and not quotation marks. lol
```

Ok. Tomorrow we will start on Advanced Objects.

I discovered the album *Masterpiece* by Big Thief today and it's pretty great. 👌🏼

</Layout>
