const schema = require("./schema.json")
module.exports = function(content) {
    const options = this.getOptions(schema)
    const prefix = `
                    /*
                     * Author: ${options.author}
                     */
    `
    return `${prefix}\n${content}`
}