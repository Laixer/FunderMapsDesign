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
