---
title: "Day 106"
---

import Layout from "../components/layout"

<Layout>

Working through reps this morning with array prototype iterators - Devin showed me a different way to do a reduce using
.includes() instead of my confusing if statement.

```JS
const result = books.reduce((acc, book) => {
      const invalidTypes = ['Horror', 'True Crime'];
      if (!invalidTypes.includes(book.genre)) {
        acc.push(book.title);
      }
      // if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
      //   acc.push(book.title);
      // }
      return acc;
    }, []);
    return result;
```

Going to go through my flashcards and then head to class.
Listened to No Medium by Rosali this morning while I was coding.

</Layout>
