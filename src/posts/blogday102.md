---
title: "Day 102"
---

import Layout from "../components/layout"

<Layout>

Did some Codewars problems today - I have a terrible time with double datasets so this one I'm posting below seems like a good one to remember. I haven't used includes in
a while so I started off trying to use it the other way around. Gah.

```JS

function gooseFilter (birds) {
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const notGeese = birds.filter(bird => {
  if (!geese.includes(bird)) {
    return bird
  }
})
  return notGeese
})

describe("Basic tests",function(){
  it("Mixed list",function(){
    Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
  });
  it("No geese",function(){
    Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
  });
  it("All geese",function(){
    Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
  });
});
```

</Layout>
