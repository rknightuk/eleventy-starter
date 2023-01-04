module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

    eleventyConfig.addPassthroughCopy("assets")

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/**/*.md")
    })

    eleventyConfig.addFilter("limit", function(array, limit) {
        return array.slice(0, limit)
    })
}
