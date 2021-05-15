---
title: "Day 109"
---

import Layout from "../components/layout"

<Layout>

I should just start calling these the reduce of the day -

```JS
const result = instructors.reduce((acc, instructor) => {
      const currentInstructorsModule = instructor.module;

      const currentInstructorsMatchingCohort = cohorts.find(cohort => {
        return cohort.module === currentInstructorsModule;
      });

      const instructorInfo = {name: instructor.name, studentCount: currentInstructorsMatchingCohort.studentCount};

      return [...acc, instructorInfo];
    }, []);

    return result;

```

    DOUBLE DATASETS ! UGH.

    Also two days ago I worked through a problem video and happily I just found the data in my JSFun problems. So I can
    futz with it . Awesome!

    Happy Saturday.

</Layout>
