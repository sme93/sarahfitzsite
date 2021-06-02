---
title: "Day 126"
---

import Layout from "../components/layout"

<Layout>

Here's my deployed site for my most recent project - https://sme93.github.io/static-comp-challenge/
An ode to one of my fav movies of all time. Here's the GH repo for it if you want to check out the code https://github.com/sme93/static-comp-challenge

I've been working on my array iterators with objects over the last few days. Here are some of the exercises.

```JS
const cityPrompts = {
  locateAllWesternCities() {

    // Return an array of the names of the Western cities
    // Hint: Make sure to include south and midwest too!
    // ["denver", "chicago", "houston", "phoenix", "seattle"]
    const westRegions = ['Midwest', 'West', 'Southwest'];
    const cityNames = Object.keys(cities);
    const filteredCityNames = cityNames.filter(city => {
      const targetCityRegion = cities[city].region;
      if (westRegions.includes(targetCityRegion)) {
        return city;
      }
    });
    // console.log("Object.keys(cities) ", Object.keys(cities));
    // const result = Object.keys(cities).reduce((acc, city) => {
    //   if (westRegions.includes(cities[city].region)) {
    //     acc.push(city);
    //   }
    //   return acc;
    // }, []);

    return filteredCityNames;
  },

  alphabatizeCities() {

    // Return an array of the names of the cities in alphabetical order
    // ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];
    const result = Object.keys(cities).sort();
    return result;
  },

  listStateAbbreviations() {
    // Return an array of the the state abbreviations
    //["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"]
    const cityValues = Object.values(cities);
    const states = cityValues.map(city => {
      return city.state;
    });
    const statesAbbreviations = states.map(state => {
      return state.split(' ')[0];
    });
    return statesAbbreviations;

    //create a variable with just the values for each city
    // loop through each city and get the city.state
    //split the state string and return the first part
  },

  findAttractionsByRegion(region) {

    // Return all of the top attractions for a given region

    // Passing in 'southeast' should return
    // [
    //   { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
    //   { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
    //   { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
    // ]
    const cityValues = Object.values(cities);
    const result = cityValues.reduce((acc, city) => {
      const lowerCaseState = city.state.split(' ')[2].toLowerCase();
      if (city.region.toLowerCase() === region) {
        acc.push({[lowerCaseState]: city.topAttractions});
      }
      return acc;
    }, []);
    return result;
  }
};
```

Off to class to learn object inheritance.

</Layout>
