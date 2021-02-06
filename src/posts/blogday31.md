---
title: "Day 31"
---
import Layout from "../components/layout"

<Layout>


Hey-ooooo

I spent all day writing code/banging my head into a wall. Still working on my project writing code to pass previously written tests.

I was using the filter method to try to pass a test that needed the splice method and it took me hours to get that right. Fun!

Ok, well here's some of my code. I'm going to go relax for a while - back at it tomorrow, nerds.

```JS
function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(newOrder);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  var locationOfOrder = deliveryOrders.findIndex(function(order) {
    if (orderNumber === order.orderNumber) {
      return order;
    }
  })

  deliveryOrders.splice(locationOfOrder, 1);
}

function listItems(deliveryOrders) {
  var itemNames = deliveryOrders.map(function(order) {
    return order.item;
  })

  var itemString = itemNames.join(", ");
  return itemString;
}

function searchOrder(deliveryOrders, searchItem) {
  var itemNames = deliveryOrders.map(function(order) {
    return order.item;
  })

  var itemExists = itemNames.includes(searchItem);

  return itemExists;
}
```
 ❤️
</Layout>
