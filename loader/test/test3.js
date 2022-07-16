module.exports = function(content) {
    // content是一个Buffer数据 接收到的是十六进制的数据
    console.log(content)
    return content;
};
module.exports.raw = true; // 开启 Raw Loader