import Alpine from "alpinejs";

// Import AlpineJS Plugins
import ui from "@alpinejs/ui";
import collapse from "@alpinejs/collapse";

// Import Design System Components
import chartBar from "./components/chartBar.js";
import chartLine from "./components/chartLine.js";
import chartPie from "./components/chartPie.js";

document.addEventListener("DOMContentLoaded", function (event) {
  window.Alpine = Alpine;

  // AlpineJS Components: Headless UI
  // https://alpinejs.dev/components
  Alpine.plugin(ui);

  // AlpineJS PLugin
  Alpine.plugin(collapse);
  Alpine.plugin(focus);

  // Design Sustem Components
  Alpine.data("chartBar", chartBar);
  Alpine.data("chartLine", chartLine);
  Alpine.data("chartPie", chartPie);

  Alpine.start();

  console.log("hello from iframe.js");
});

// Send a message to the parent window to resize the iframe when the content is done loading or changes
