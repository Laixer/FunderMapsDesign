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
