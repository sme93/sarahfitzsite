---
title: "Day 4"
---
Reviewed Arrays this afternoon on Codecademy and learned a few new things.

Even when declared with const, arrays are still mutable, but a variable declared with const cannot be reassigned. I also learned that arrays can be nested inside other arrays. Here is some practice of nesting arrays and accessing different elements inside the array.

```JS

const buffyCharacters = [["Buffy", "Angel"], ["Willow", "Tara"], ["Xander", "Anya"]];

const bestCouple = buffyCharacters[1];
console.log(bestCouple);
//output ["Willow", "Tara"]

const hottestBoy = buffyCharacters[0][1];
console.log(hottestBoy);
//output "Angel"

```
Here's some practice with the .slice() method and the .indexOf() method.

```JS

const bestBuffyCharacters = ["Spike", "Buffy", "Giles", "Cordelia", "Anya", "Willow"];

console.log(bestBuffyCharacters.slice(1,3));
// output "Buffy", "Giles"
console.log(bestBuffyCharacters.slice(2,4));
//output "Giles", "Cordelia"

console.log(bestBuffyCharacters.indexOf("Spike"));
//output 0
```

I also learned how to change an array inside of a function. Here's an example...

```JS

const bestBuffyCharacters = ["Spike", "Buffy", "Giles", "Cordelia", "Angel", "Willow"];

function update(arr) {
  arr[4] = "Anya";
}
update(bestBuffyCharacters);
console.log(bestBuffyCharacters);
// ["Spike", "Buffy", "Giles", "Cordelia", "Anya", "Willow"]

```
Ok! Enough for today.

I listened to Whitney and Beach House while I was coding today. 
