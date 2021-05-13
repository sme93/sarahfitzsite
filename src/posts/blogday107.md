---
title: "Day 107"
---

import Layout from "../components/layout"

<Layout>

I spent most of today reviewing dot and bracket notation, and honestly I still don't get ALL of it. Here are some notes from class and examples that I worked
through.

Dot notation is used when we know the name of the key we want to access or create. If we don't literally know the name of the key, we can
use bracket notation. Javascript will evaluate whatever is inside of the brackets before trying to create or access a key. Brackets are great
to use when we are accessing something like a variable. We can also use brackets to access keys that are numbers or keys that are two separate words.

It's great to use bracket notation when accessing the keys in objects while using reduce - like in this example...

```JS
const wordLengths = adjectives.reduce((acc, word) => {

  acc[word] = word.length;
  return acc;
}, {});
```

Here are two more examples using bracket notation. The first one uses Object.keys to change the keys of the object into an array.
After we do that we can iterate over that array with forEach and use bracket notation to access the values for each key in the object.

```JS
const dog = {
  name: 'Boris',
  age: 3,
  breed: 'Pug'
};

const dogKeys = Object.keys(dog);


const getDogDeets = () => {
  const dogDeets = dogKeys.forEach(detail => {
    console.log(`His ${detail} is ${dog[detail]}`)
  })
  return dogDeets
}

getDogDeets()
```

This example was from a video I watched today, and unfortunately I don't have access to the data that the instructor was
using for the code she wrote. It was a double dataset of two objects, and she was able to turn it into one large object that
kept track of the damange and range of the weapons using dot and bracket notation. I'm still not sure about why you can use the
dot notation inside of the bracket notation here. Something to follow up on.

```JS
characters.reduce((acc, character) => {
  acc[character.name] = { damage: 0, range: 0};
  character.weapons.forEach(weapon => {
    acc[character.name].damage += weapons[weapon].damage
    acc[character.name].range += weapons[weapon].range
  })
  return acc;
}, {});
```

The last snippet I will post was from array method practice this morning. I had
originally used my buddy reduce to solve this problem, but the solution wasn't exactly right since we
were obviously supposed to use the find method to return the first item that returned true. So I refactored it
with find and used dot notation to get my return as it should be. Huzzah.

```JS
const letsLeave = () => {
  const findTOS = groceryList.reduce((acc, item) => {
    if(!item.inStock) {
      acc.push(item.item)
    }
  return acc;
  }, []);

  return `Ugh, this store is out of ${findTOS[0]}, let\'s shop somewhere else.`
}
console.log(letsLeave())

const letsLeave = () => {
  const foundItem = groceryList.find(item => {
    return (!item.inStock)
  })

return `Ugh, this store is out of ${foundItem.item}, let\'s shop somewhere else.`;
}
console.log(letsLeave())
```

Ok, enough coding for today. See ya'll tomorrow.

</Layout>
