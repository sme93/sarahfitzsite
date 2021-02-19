---
title: "Day 43"
---
import Layout from "../components/layout"

<Layout>

I started a new project this morning - it will give you a random mantra or affirmation when you hit a button.
Can't really think of anything more off-brand for me to be working on, but that's ok. I wrote the HTML and started working
on the CSS - so far it's not as terrible as I thought it would be. Today is the first time I am writing either of those to
match up to a provided comp!

I also had my mid-term test this morning to make sure I'm on track for passing the course and I did really well. Huzzah.

Once I finish my project I'll post the link here. In the meantime, enjoy this HTML. ✨

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <main>
      <h1>✨Self Care Center✨</h1>
      <section>
        <h2>Which type of message?</h2>
        <form class="message-form" action="index.html" method="post">
          <input class="message-input" type="radio" name="message" value="affirmation"/>affirmation
          <input class="message-input" type="radio" name="message" value="mantra"/>mantra
          <button class="message-button">Receive Message</button>
        </form>
        <div class="message-display">
          <img src="./assets/meditate.svg" alt="meditating person">
        </div>
      </section>
    </main>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

I didn't listen to any music today! Boo.


</Layout>
