---
title: "Day 110"
---

import Layout from "../components/layout"

<Layout>

Today I was able to use the code I wrote solving my daily reduce exercises to solve a problem in my current school
project. I also used Object.assign and a spread operator, all in one sweet method. Lots of comments to help
me remember what I did.

```JS

returnIngredients(ingredientsData) {
    const completeIngredients = this.ingredients.reduce((acc, ingredient) => {
      //same thing as the above method, matching ingredient ids to the data
      const matchingIngredient = this.__findMatchingIngredient(
        ingredientsData,
        ingredient
      );

      //using Object.assign to merge the two objects of ingredients together

      //recipe datashape
      // {
      //   id: 2047,
      //   quantity: { amount: 0.5, unit: 'tsp' }
      // }

      // ingredient datashape
      // {
      //   id: 2047,
      //   name: 'salt',
      //   estimatedCostInCents: 280
      // }

      //merged datashape
      // {
      //   id: 2047,
      //   quantity: { amount: 0.5, unit: 'tsp' }
      //   name: 'salt',
      //   estimatedCostInCents: 280
      // }

      const mergedIngredient = Object.assign(matchingIngredient, ingredient);
      // use the spread operator to insert each merged ingredient
      //into the acc array
      return [...acc, mergedIngredient];
    }, []);

    return completeIngredients;
  }
```

Check out the new St Vincent album, it's awesome.
<Spotify spotifyLink="album/654KFpNOZ26Hj9luu7aKeM" />

</Layout>
