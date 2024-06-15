// CSS and JavaScript as first-class citizens in Eleventy: https://pepelsbey.dev/articles/eleventy-css-js/

const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssNesting = require("postcss-nesting");
const postcssImportExtGlob = require("postcss-import-ext-glob");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function isValidPath(path) {
  const regex = /^\.\/src\/(assets|lemone\-design)\/css\/[^/]*\.css$/;
  return regex.test(path);
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async (content, path) => {
      if (!isValidPath(path)) {
        return;
      }

      return async () => {
        let output = await postcss([
          postcssImportExtGlob,
          postcssImport,
          postcssNesting,
          tailwindcss,
          autoprefixer,
          cssnano,
        ]).process(content, {
          from: path,
        });

        return output.css;
      };
    },
  });
};
