// _data/tailwindConfig.js
// Import the Tailwind CSS configuration
const tailwindConfig = require("../../tailwind.config.js");

// Export a function that returns the font families from the Tailwind CSS configuration
module.exports = function () {
  // Initialize an empty object to store the font families
  let fonts = {};

  // Define a function to tokenize the font families from the Tailwind CSS configuration
  const tokenizeTailwindFonts = (obj) => {
    // Loop over each key-value pair in the object
    for (const [key, value] of Object.entries(obj)) {
      // Split the value by comma, take the first font, and remove quotes
      const firstFont = value.split(",")[0].trim().replace(/['"]/g, "");
      // Add the first font to the fonts object
      fonts = { ...fonts, [key]: firstFont };
    }
  };

  // Call the function with the font families from the Tailwind CSS configuration
  tokenizeTailwindFonts(tailwindConfig.theme.fontFamily);

  // Return the fonts object
  return fonts;
};
