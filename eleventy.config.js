module.exports = function(eleventyConfig) {
  // Copy the assets directory (images, and compiled css) to the output folder
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Watch target for Tailwind output CSS so Eleventy rebuilds when Tailwind updates it
  eleventyConfig.addWatchTarget("src/assets/css/main.css");

  // Date formatting filter for blog posts
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(dateObj);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
