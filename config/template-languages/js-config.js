const esbuild = require("esbuild");

function isValidPath(path) {
  const regex = /^\.\/src\/(assets|lemone-design)\/js\//;
  return regex.test(path);
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats("js");

  eleventyConfig.addExtension("js", {
    outputFileExtension: "js",
    compile: async (content, path) => {
      if (!isValidPath(path)) {
        return;
      }

      if (path === "./src/assets/scripts/theme-toggle.js") {
        await esbuild.build({
          target: "es2020",
          entryPoints: [path],
          outfile: "./src/_includes/theme-toggle-inline.js",
          bundle: true,
          minify: true,
        });
        return;
      }

      return async () => {
        let output = await esbuild.build({
          target: "es2020",
          entryPoints: [path],
          minify: true,
          bundle: true,
          write: false,
        });

        return output.outputFiles[0].text;
      };
    },
  });
};
