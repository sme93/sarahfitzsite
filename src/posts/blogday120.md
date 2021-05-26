---
title: "Day 116 - 120"
---

import Layout from "../components/layout"

<Layout>

Well, I skipped out on a few days on the ol' blog since I have been busy working on my school project. Which reminds me... [here's](https://youtu.be/JDhKCZePFT0) a YouTube vid of my project partner and I doing our presentation of our website!

Here are some exercises I've done over the last few days from Codewars and my IronFe problems.

```JS
function sumMix(x){
 const sum = x.reduce((acc, num) => {
   if (typeof num === 'string') {
     let newNum = parseInt(num);
     acc += newNum;
   } else {
     acc += num;
   }
  return acc;
 }, 0);
  return sum;
}

function mergeArrays(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
   newArr.sort((a, b) => a - b);
   return [...new Set(newArr)];
}

const getComplicated = () => {
  const showVenueByLat = showData.sort((a, b) => a.venue.latitude - b.venue.latitude)
  .reduce((acc, data) => {
    const myNewObj = {[data.venue.name]: data.venue.latitude};
    if (acc.includes(myNewObj)) {
    return acc;
    } else {
      return [...acc, myNewObj]
    }
    return acc
  }, []);
  return showVenueByLat;
}
console.log(getComplicated());
```

The last one I was using rep.l and it wasn't letting me use my
favorite thing to remove dupes (new Set()) so I was trying to use includes to get rid of all my duplicates in my array but it wasn't working. Not sure what I'm doing wrong there.

Gotta get back to practicing. Have a good one!

</Layout>
