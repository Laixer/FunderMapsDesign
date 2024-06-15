const fs = require("fs");
const path = require("path");

function getSvgIcons(dir, obj = {}, basePath = "") {
  // Read the directory
  const files = fs.readdirSync(dir);

  // Iterate over the files
  for (const file of files) {
    // Get the full path of the file
    const filePath = path.join(dir, file);

    // Check if the file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      // If the file is a directory, read it recursively
      obj[file] = getSvgIcons(filePath, [], path.join(basePath, file));
    } else if (path.extname(file) === ".svg") {
      // If the file is an SVG, add it to the array
      const iconName = path.basename(file, ".svg");
      obj.push(iconName);
    }
  }

  // Return the object
  return obj;
}

// Export the function
module.exports = function () {
  return getSvgIcons("./src/assets/svg/icons");
};
