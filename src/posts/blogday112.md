---
title: "Day 112"
---

import Layout from "../components/layout"

<Layout>

I did a double loop this afternoon and figured out how to filter by multiple tags in my current project. It's by no means elegant but it's getting the job done, and honestly that's all I need right now.

```JS
filterByTag(tags) {
    const newFilterTags = typeof tags === "string" ? [tags] : tags;
    let filteredRecipes = [];
    newFilterTags.forEach(tag => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          filteredRecipes.push(recipe)
        }
      })
    })
    return [...new Set(filteredRecipes)];
  }
```

I made a few new flashcards this morning and I'm going to hop off and do some array methods exercises. Here's the current tunes...

<Spotify spotifyLink="album/6NTaxSEZsDR5RlGyBzKNmZ" />

  </Layout>
