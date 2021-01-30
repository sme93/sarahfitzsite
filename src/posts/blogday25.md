---
title: "Day 25"
---

<Layout>

Day 25, so I'm 1/4 of the way through my 100 days. Huzzah. I did some practice with Javascript functions today.

Check 'em out -

```JS
var tellFortune = function(children, partner, location, job) {
  console.log("You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.");
};

tellFortune(3, "Mario", "Ecuador", "plumber");

//output You will be a plumber in Ecuador, and married to Mario with 3 kids.

tellFortune(2, "Luigi", "Super Mario World", "plumber's assistant");

//output You will be a plumber's assistant in Super Mario World, and married to Luigi with 2 kids.

tellFortune(7, "Toad", "Costa Rica", "housewife");

//output You will be a housewife in Costa Rica, and married to Toad with 7 kids.

var calculateAge = (birth, current) => {
  console.log("You are either " + (current - birth) + " or " + ((current - birth) - 1));
};

calculateAge(1978, 2021); //output You are either 43 or 42
calculateAge(1993, 2021); //output You are either 28 or 27
calculateAge(1997, 2021); //output You are either 24 or 23

var calculateSupply = (currentAge, amountPerDay, maxAge) => {
  console.log("You will need " + ((maxAge - currentAge) * amountPerDay) + " to last you until the ripe old age of " + maxAge + ".");
};
calculateSupply(42, 5, 95); //output You will need 265 to last you until the ripe old age of 95.
calculateSupply(27, 20, 72); //output You will need 900 to last you until the ripe old age of 72.
calculateSupply(56, 1, 101); //output You will need 900 to last you until the ripe old age of 72.

var reverseString = function(string) {
  return string.split("").reverse().join("");
};

console.log(reverseString("Joey")); //output yeoJ
console.log(reverseString("Tuna")); //output anuT
console.log(reverseString("Seven")); //output neveS
```

I wish I had found this exercises page for JS about a week ago. I'm going to resist the urge to do more because I really just want to try
to chill out over this weekend before school starts.

I listened to Hail to the Thief by Radiohead while I was coding.  ✌🏽



</Layout>
