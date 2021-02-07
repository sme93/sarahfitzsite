---
title: "Day 32"
---
import Layout from "../components/layout"

<Layout>

I wrote this piece of code today and I'm sure it's not wonderful but it made all the tests pass and I was stoked about it.

```JS
function addMenuItem(restaurantObject, menuObject) {
  if (menuObject.type === "breakfast" && !restaurantObject.menus.breakfast.includes(menuObject)) {
    restaurantObject.menus.breakfast.push(menuObject)
  }

  if (menuObject.type === "lunch" && !restaurantObject.menus.lunch.includes(menuObject)) {
    restaurantObject.menus.lunch.push(menuObject)
  }

  if (menuObject.type === "dinner" && !restaurantObject.menus.dinner.includes(menuObject)) {
    restaurantObject.menus.dinner.push(menuObject)
  }
}
```

I need to get away from my computer now. I listened to a jazzy mix while I was coding - Mingus, Brubeck, Coleman Hawkins, etc.





</Layout>
