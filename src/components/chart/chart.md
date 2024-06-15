---
title: "Charts"
excerpt: "Showcase for the usage of the chart component"
status: "Draft"
meta:
  title: Chart component
eleventyNavigation:
  key: Chart
  parent: Components
---

Charts are rendered with the third party library [Charts.js](https://www.chartjs.org/), this library works with the most popular Frameworks. More details about how to install can be found in the Charts.js [documentation](https://www.chartjs.org/docs/latest/getting-started/).

The code examples are made with the javascript framework AlpineJS and are not production ready.

### Colors

The following from the [colors](/design-tokens/colors/) can be used, the [utils file](/assets/downloads/utils.zip) used in the demo charts can be downloaded.

{% preview %}
{% render "./colors.component.liquid" %}
{% endpreview %}

### Example bar chart

{% preview %}
{% render "./bar.component.liquid" %}
{% endpreview %}

##### AlpineJS Code Example bar chart

```js
import { Chart } from "chart.js/auto";
import * as Utils from "../utils/utils.js";

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

export default () => ({
  init() {
    let chart = new Chart(this.$refs.canvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Example Chart",
            data: data.map((row) => row.count),
            borderColor: Utils.CHART_COLORS.green,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
            borderWidth: 1,
          },
        ],
      },
    });
  },
});
```

### Example line chart

{% preview %}
{% render "./line.component.liquid" %}
{% endpreview %}

##### AlpineJS Code Example line chart

```js
import { Chart } from "chart.js/auto";
import * as Utils from "../utils/utils.js";

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

export default () => ({
  init() {
    let chart = new Chart(this.$refs.canvas.getContext("2d"), {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Example Chart",
            data: data.map((row) => row.count),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),
            fill: {
              target: "start",
            },
          },
        ],
      },
    });
  },
});
```

### Example pie chart

{% preview %}
{% render "./pie.component.liquid" %}
{% endpreview %}

##### AlpineJS Code Example pie chart

```js
import { Chart } from "chart.js/auto";
import * as Utils from "../utils/utils.js";

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Grey"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 200, 250, 75, 100],
      backgroundColor: [
        Utils.CHART_COLORS.green,
        Utils.CHART_COLORS.blue,
        Utils.CHART_COLORS.yellow,
        Utils.CHART_COLORS.orange,
        Utils.CHART_COLORS.red,
        Utils.CHART_COLORS.pink,
        Utils.CHART_COLORS.grey,
      ],
      hoverOffset: 10,
    },
  ],
};

export default () => ({
  init() {
    let chart = new Chart(this.$refs.canvas.getContext("2d"), {
      type: "pie",
      data: data,
    });
  },
});
```
