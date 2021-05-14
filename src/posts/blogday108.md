---
title: "Day 108"
---

import Layout from "../components/layout"

<Layout>

I wrote this sweet reduce this morning, feeling pretty good about it.

```JS
const getStockLists = () => {
  const stockLists = groceryList.reduce((acc, item) => {
    if(item.inStock) {
      acc.inStock.push(item.item)
    } else {
      acc.outOfStock.push(item.item)
    }
    return acc
  }, {inStock: [], outOfStock: []});
  return stockLists;
}
```

I'm going to work through some flashcards and then head to class. Have a good day!

</Layout>
