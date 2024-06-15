// _data/tailwindFontSizes.js
// Import the Tailwind CSS configuration
const tailwindConfig = require("../../tailwind.config.js");

// Export a function that returns the font sizes from the Tailwind CSS configuration
module.exports = function () {
  // Get the keys from the fontSize object in the Tailwind CSS configuration
  // These keys are the names of the font sizes
  const fontSizes = Object.keys(tailwindConfig.theme.fontSize);

  // Return the font sizes
  return fontSizes;
};
