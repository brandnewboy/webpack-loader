const babel = require("@babel/core")
const schema = require("./schema.json")

module.exports = function(content) {
    const options = this.getOptions(schema);
    // 使用异步loader
    const callback = this.async();
    // 使用babel对js代码进行编译
    babel.transform(content, options, function(err, result) {
        callback(err, result.code);
    });
}