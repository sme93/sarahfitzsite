---
title: "Day 31"
---
import Layout from "../components/layout"

<Layout>


Hello! Today I made a tweet! I'll also post the code I wrote to finish out my first solo project.

Here's my tweet!

```JS
class Tweet {
  constructor(sender, content) {
    this.sender = sender;
    this.content = content;
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }

    like() {
      this.likes++;
    }

    retweet() {
      this.retweets++;
    }

    reply(reply) {
      this.replyCount++;
      this.replies.push(reply);
    }
}
```

Here's a unicorn!
```JS
class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
    this.color = color;
    }
  }
  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}
```
And here is the last function I wrote for my solo project.
```JS
function removeMenuItem(restaurantObject, nameToRemove, menuType) {
  var isOnMenu = restaurantObject.menus[menuType].some(function(meal) {
      return meal.name === nameToRemove;
  })

  if (isOnMenu) {
    restaurantObject.menus[menuType] = [];
    return `No one is eating our ${nameToRemove} - it has been removed from the ${menuType} menu!`
  }

  if (isOnMenu) {
    return `Sorry, we don't sell ${nameToRemove}, try adding a new recipe!`
  }
}
```
That's all for today. See you tomorrow!

</Layout>
