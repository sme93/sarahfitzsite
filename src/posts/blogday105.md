---
title: "Day 105"
---

import Layout from "../components/layout"

<Layout>

Posting this jawn here so I can remember .toLowerCase(). I had the whole ternary operator thing
working for me and then had to correct for capitalization...

```JS
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
```

The above returning the string small if the animal is an alligator and wide if it's not.
And just for fun here is my practice using .concat() to join two arrays and then new Set() to
remove duplicates.

```JS
const keyMovies = Object.keys(marvelMovies)
const captainMovies = keyMovies.filter(movie => {
  if(marvelMovies[movie].characters.includes('Captain America')) {
    return movie;
  }
});
const captainComics = keyComics.filter(comic => {
  if(marvelComics[comic].characters.includes('Captain America')) {
    return comic;
  }
});

const allCaptains = captainMovies.concat(captainComics);
console.log([...new Set(allCaptains)]);
```

Listening to Bill Evans and Mingus this morning while doing these exercises. Off to class to learn about Scope.

</Layout>
