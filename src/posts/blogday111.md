---
title: "Day 111"
---

import Layout from "../components/layout"

<Layout>

One of our lessons today was on what a good README should include, which reminds me that I really need to do a README for my website, because I'm
pretty sure that right now it's just the Gatsby default README. Ooops.

A good README should tell the reader what makes the project unique, what the main features are, and how to install the project. At the school I'm
attending, they also encourage us to include little GIFs of the application so the user can get an idea of how it runs.

Yesterday I installed mdx-embed to my Gatsby site so I can post Spotify links. I installed it using npm install, which happened to be the other lesson we had in school today. The package is a Gatsby plugin that lets me use certain React components in my blog posts, which are written in markdown. All I needed to do was add a reference to the plugin in my Gatsby config file and then add the following code to my blog post

```
<Spotify spotifyLink="album/0bCAjiUamIFqKJsekOYuRw" height="80px" />
```

That renders this, which is what I was listening to today!

<Spotify spotifyLink="album/0bCAjiUamIFqKJsekOYuRw" height="80px" />

I explored the storybook this afternoon, and discovered I can also embed Instagram posts, so you KNOW I'm going to be doing that soon.

Here's the reduce of the day. I'm about to delete this in my exercise file and see if I can re-do it!

```JS
studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const cohortsWithInstructorCount = cohorts.map(cohort => {
      const instructorCount = instructors.reduce((acc, instructor) => {
        if (instructor.module === cohort.module) {
          acc += 1;
        }
        return acc;
      }, 0);

      return {...cohort, instructorCount};
    });

    const result = cohortsWithInstructorCount.reduce((acc, cohort) => {
      const newObject = {[`cohort${cohort.cohort}`]: (cohort.studentCount / cohort.instructorCount)};
      return {...acc, ...newObject};
    }, {});
    return result;

  }
```

Have a good one!

</Layout>
