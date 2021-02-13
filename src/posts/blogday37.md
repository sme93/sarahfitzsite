---
title: "Day 37"
---
import Layout from "../components/layout"

<Layout>

It's Friday night after a very long week at school and I'm blogging about coding! Yikes. Over the last few days I've been working on my partner project to make an interactive website that creates motivational posters. Right now I'm waiting on my partner to review and approve a full pull requests, so once the project is complete I will link it here.

I've been using querySelectors to isolate different classes, add Event Listeners and then writing functions to achieve our desired site.

Also, I made a vampire. Here it is.

```JS
class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
    }
    if (this.ouncesDrank === 50) {
      return "I'm too full to drink anymore!";
    }
  }
}
```

Three day weekend coming up! woot woot


</Layout>
