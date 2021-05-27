---
title: "Day 121"
---

import Layout from "../components/layout"

<Layout>

Still plugging away at the iterator methods. I did two this morning that used different prototype methods than my usual suspects. The first one was from the day before - I figured out how to get rid of all the duplicates. I left a lot of my psuedocode and problem solving work in there too. The second example was my first foray with flatMap AND WITH using the index parameter in my callback function in map! Pretty cool.

```JS
const getComplicated = () => {
  const showVenueByLat = showData.sort((a, b) => a.venue.latitude - b.venue.latitude)
  .reduce((acc, data) => {

    const myNewObj = {[data.venue.name]: data.venue.latitude};
    const name = data.venue.name;
    //sometimes an object like myNewObj exists in the array
    //other times it doesn't
    //so i need to check the array for this object
    //since names are unique I can look for one
    //[{'tuna': 10}, {'joey': 11}]
    //if I run a find on the above for dog['seven']
    //what comes back is undefined
    if (acc.find(item => {
      return item[name];
    })) {
    return acc;
    } else {
      return [...acc, myNewObj]
     }
    return acc;
  }, []);

  return showVenueByLat;
}

 const shapes = [
  { 'Barcelo Maya Beach': 20.631389 },
  { 'Barcelo Maya Beach': 20.631389 }
]
const name = 'Barcelo Maya Beach'
const foundShape = shapes.find(shape => {
  return (shape[name]);
})
//console.log(foundShape)
getComplicated();

//The output -
[
  { 'Barcelo Maya Beach': 20.631389 },
  { 'Ervin J. Nutter Center, Wright State University': 39.7804794 },
  { "Dick's Sporting Goods Park": 39.8058438 },
  { 'Petersen Events Center': 40.443777 },
  { 'Madison Square Garden': 40.7505045 },
  { 'Huntington Bank Pavilion at Northerly Island': 41.867516 }
]

const getGuestStarsVersionTwo = () => {
  const versionTwoGS = murder.topFiveEpisodes.flatMap(episode => {
    return episode.guestStars
  }).map((star, index) => {
    return {[index]: star}
  });
  return versionTwoGS
}
getGuestStarsVersionTwo()

//The output
[
  { '0': 'Jeff Conaway' },
  { '1': 'Gabe Kaplan' },
  { '2': 'Martin Landau' },
  { '3': 'Vicki Lawrence' },
  { '4': 'Leslie Nielsen' },
  { '5': 'Jo Anne Worley' },
  { '6': 'Bryan Cranston' },
  { '7': 'Linda Hamilton' },
  { '8': 'David Spielberg' },
  { '9': 'John McMartin' },
  { '10': 'Tom Selleck' },
  { '11': 'Jessica Walter' },
  { '12': 'Jane Badler' },
  { '13': 'Kabir Bedi' },
  { '14': 'Larry Linville' }
]
```

Look at all those awesome 80's guest stars! In case you are wondering the data set is from Murder She Wrote episodes, haha.

Have a good day!

</Layout>
