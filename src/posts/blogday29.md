---
title: "Day 29"
---

import Layout from "../components/layout"

<Layout>

Today I wrote the most beautiful for loop after writing super complicated versions of the loop during all my pom breaks at school. Here's the link to the
rep.l - https://repl.it/@sme93/ArrayPractice#index.js

Aaaaand just because I'm really happy about it here's the code snippet of my simple for loop to turn true to false and false to true.

```JS
var truthsAndLies = [true, true, false, true, false, true, true];

// 9) Change each false value to true and log the array to confirm
for (var i = 0; i < truthsAndLies.length; i++) {
  console.log(!truthsAndLies[i]);
}
```
Huzzah.

I also learned about Test Driven Development today. We were able to work with tests that had already been written and then write code to make the tests work. The testing programs we ran were Mocha and Chai. Mocha is a testing framework that run on node.js in your terminal. Chai is an assertion library that plugs into Mocha.

Important reasons to test include:
- find bugs early
- provides a roadmap to say how app should work
- helps make sure code is modular, flexible, decoupled and compartmentalized
- make sure small peices of code all work together
- helps plan for error states

We won't write any tests until the next module.

OK, I have to go check to make sure all my homework is done.

I listened to Krill while I was coding today. [forever and ever]

</Layout>
