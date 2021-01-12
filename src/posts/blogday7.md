---
title: "Day 7"
---
import Layout from "../components/layout"

<Layout>

This morning I went back and updated all of my coding exercises for Day 1 of this blog, since I didn't have this blog when I did the exercises initially. It was good review on ternary operators and switch statements, since they were new to me.

I also purposefully tried to use all my keyboard shortcuts and not use my mouse as much as possible. Such an annoying habit to break.

Now I'm going to work through this really small lesson on codecademy for higher order functions.

Higher order functions are functions that accept other functions as arguments and/or return functions as output.

Below we will create a variable with a shorter name that holds the function with a very long name to make the code more readible, but still contain a reference to the original function. I'm using the same example from codecademy here.

```JS
var checkThatTwoPlusTwoEqualsFourAMillionTimes() {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log("Something has gone very wrong");
    }
  }
}
// create the new variable to hold the original function
var is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

//invoke your new function
is2p2();

//if we want to find out the original name of our renamed function, we can use the .name method to find out what it was
console.log(is2p2.name);
// output checkThatTwoPlusTwoEqualsFourAMillionTimes
```
I found the next practice to be super confusing so I'm stopping here today on the blog so I can look at this closely tomorrow and see if maybe a different source is helpful.

I listened to *color theory* by Soccer Mommy while I was working through the lesson.


</Layout>
