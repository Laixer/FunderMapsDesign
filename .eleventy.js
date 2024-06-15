// Import the fs module
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Import Eleventy Plugins
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
// const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

const eleventyPrism = syntaxHighlight.pairedShortcode;

const prettier = require("prettier");

module.exports = function (eleventyConfig) {
  /* --- TEMPLATE ENGINE --- */

  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  /* --- PASSTHROUGHS --- */

  // eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  // eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/svg");
  eleventyConfig.addPassthroughCopy("src/assets/downloads");

  // Design system assets
  eleventyConfig.addPassthroughCopy("src/lemone-design/icons");

  /* --- PLUGINS --- */

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/includes/components/*.webc",
  });
  // eleventyConfig.addPlugin(require("./src/libs/shiki.js"), {
  //   theme: "dark-plus",
  // });
  // eleventyConfig.addPlugin(EleventyVitePlugin, {
  //   viteOptions: {
  //     build: {
  //       rollupOptions: {},
  //     },yar
  //   },
  // });

  /* --- COLLECTIONS --- */

  // Returns component items
  eleventyConfig.addCollection("components", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/components/**/*.md");
  });

  eleventyConfig.addCollection("design-tokens", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/design-tokens/**/*");
  });

  /* --- SHORTCODES --- */
  // eleventyConfig.addPairedShortcode("preview", function (content) {
  //   return `<div class="ld-preview">${content}</div>`;
  // });

  eleventyConfig.addShortcode("testing", function () {
    // WebC in a shortcode!
    return "<undefined-component></undefined-component><ld-mand><p>hello</p></ld-mand><ld-preview><p>world</p></ld-preview>";
  });

  // Add the shortcode
  eleventyConfig.addShortcode(
    "inlineSvg",
    function (
      filename,
      classes = false,
      attributes = false,
      group = "functional",
      basePath = "./src/assets/svg/icons/",
    ) {
      // Define the path to the SVG file
      const filePath = path.join(__dirname, `${basePath}${group}/${filename}.svg`);

      // Check if the SVG file exists
      if (!fs.existsSync(filePath)) {
        // If the file does not exist, return an HTML comment
        return `<!-- SVG icon "${group ? group + "/" : ""}${filename}" not found -->`;
      }

      // Read the SVG file
      let svgContent = fs.readFileSync(filePath, "utf8");

      // Add the classes
      if (classes) {
        svgContent = svgContent.replace("<svg", `<svg class="${classes}"`);
      }

      // Add the attributes
      if (attributes) {
        // Replace single quotes with double quotes
        attributes = attributes.replace(/'/g, '"');

        // Parse the attributes string
        const attrs = JSON.parse(attributes);
        for (const [key, value] of Object.entries(attrs)) {
          svgContent = svgContent.replace("<svg", `<svg ${key}="${value}"`);
        }
      }

      // Return the SVG content
      return svgContent;
    },
  );

  // Code examples shortcode
  eleventyConfig.addPairedShortcode(
    "component",
    async function (content, language = "html", preview = true, markup = true) {
      var code = content.trim();
      code = await prettier.format(code, {
        printWidth: 120,
        parser: "html",
      });
      var component = "";
      var iframeID = eleventyConfig.getFilter("getRandomUUID")();
      var designSystem = eleventyConfig.getFilter("url")("/assets/css/design-system.css");

      if (preview && language === "html") {
        var iframeContent = `<link rel="stylesheet" href="${designSystem}"><link rel="stylesheet" href="/lemone-design/css/iframe.css">${code}<script type="module" src="/assets/js/design-system.js"></script><script type="module" src="/lemone-design/js/iframe.js"></script>`;
        component += `<div class="ld-preview"><iframe id="iframe-${iframeID}" style="width: 100%;" srcdoc="${iframeContent.replace(/"/g, "&quot;")}" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';"></iframe></div>`;
        // component += `<div class="ld-preview">${code}</div>`;
      }
      if (markup) {
        code = code.replace(/(<svg[^>]*>)[\s\S]*?(<\/svg>)/g, "$1\n<!-- SVG content -->\n$2");
        code = await prettier.format(code, {
          printWidth: 120,
          parser: "html",
        });
        component += `<div class="ld-markup">${eleventyPrism(code, language)}</div>\n`;
      }

      // component += `<ld-test>${code}</ld-test>`;

      return `<div class="ld-component">${component}</div>\n`;
    },
  );

  eleventyConfig.addPairedShortcode("preview", async function (content, classes = "", language = "html") {
    var code = content.trim();
    code = await prettier.format(code, {
      printWidth: 120,
      parser: "html",
    });
    var component = "";
    var designSystem = eleventyConfig.getFilter("url")("/assets/css/design-system.css");
    var iframeID = eleventyConfig.getFilter("getRandomUUID")();

    var iframeContent = `<link rel="stylesheet" href="${designSystem}"><link rel="stylesheet" href="/lemone-design/css/iframe.css">${code}<script type="module" src="/assets/js/design-system.js"></script><script type="module" src="/lemone-design/js/iframe.js"></script>`;
    component += `<div class="ld-preview"><iframe id="iframe-${iframeID}" class="${classes}" style="width: 100%;" srcdoc="${iframeContent.replace(/"/g, "&quot;")}" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';"></iframe></div>`;

    return component; // component += `<div class="ld-preview">${code}</div>`;
  });

  eleventyConfig.addPairedShortcode("codePreview", async function (content, classes = "", language = "html") {
    var code = content.trim();
    code = code.replace(/(<svg[^>]*>)[\s\S]*?(<\/svg>)/g, "$1\n<!-- SVG content -->\n$2");
    code = await prettier.format(code, {
      printWidth: 120,
      parser: "html",
    });
    return `<div class="ld-markup ${classes}">${eleventyPrism(code, language)}</div>\n`;
  });

  // Output year for copyright notices
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  /* --- FILTERS --- */

  // Custom Random Helper Filter (useful for ID attributes)
  eleventyConfig.addFilter("getRandomUUID", () => {
    return crypto.randomUUID();
  });

  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require("./config/template-languages/css-config.js"));
  eleventyConfig.addPlugin(require("./config/template-languages/js-config.js"));

  /* --- Settings --- */
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->",
  });

  /* --- BASE CONFIG --- */

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["liquid", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
