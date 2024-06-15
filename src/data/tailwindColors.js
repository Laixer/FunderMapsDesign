// _data/tailwindConfig.js
// Import the Tailwind CSS configuration
const tailwindConfig = require("../../tailwind.config.js");

// Export a function that returns the colors from the Tailwind CSS configuration
module.exports = function () {
  // Initialize an empty object to store the colors
  const colors = {};

  // Define a function to tokenize the colors from the Tailwind CSS configuration
  const tokenizeTailwindColors = (obj, parentKey = "base", objKey = false) => {
    // Loop over each key-value pair in the object
    for (const [key, value] of obj) {
      // If the value is an object, call the function recursively with the value and the key
      if (typeof value === "object") {
        const newKey = objKey ? `${objKey}-${key}` : key;
        tokenizeTailwindColors(Object.entries(value), newKey, key);
      } else {
        // If the value is not an object, add it to the colors object
        colors[`${parentKey}`] = { ...colors[`${parentKey}`], [`${key}`]: value };
      }
    }
  };

  // Call the function with the colors from the Tailwind CSS configuration
  tokenizeTailwindColors(Object.entries(tailwindConfig.theme.colors));

  // Return the colors object
  return colors;
};
