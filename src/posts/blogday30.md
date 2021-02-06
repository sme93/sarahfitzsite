---
title: "Day 30"
---
import Layout from "../components/layout"

<Layout>

It's day 30! Alright!

I worked on writing code to make all my tests work today. I won't post the test code (because I didn't write it) but here is the code I wrote to
make the tests I was given work. It all looks very simple, and I'm sure that it is, but it doesn't feel that way right now. Anyway, here are some of the
functions that I wrote.

```JS
function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder);
  }
}

function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name:name,
    price:price,
    type:type,
  }
}

function addIngredients(ingredientName, ingredientsArray) {
  if (ingredientsArray.includes(ingredientName)) {
    return ingredientsArray;
  } else {
    return ingredientsArray.push(ingredientName);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * 0.1);
}

function createRecipe(title, ingredients, type) {
  return {
    title:title,
    ingredients:ingredients,
    type:type,
  }
}
```
K, I'll be back tomorrow with more functions.

</Layout>
