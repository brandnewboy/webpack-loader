const styleLoader = () => {}

/**
 * 因为直接在style-loader里面接收到的是css-loader传递过来的内容，是一段js代码
 * 而我们需要的是css-loader那一段js代码执行完成之后暴露出来的样式文件，所以这里使用pitch
 * @param {*} remainingRequest 
 * @returns 
 */
styleLoader.pitch = function(remainingRequest) {
    // 获得css-loader处理结果的路径
    /*
     * remainingRequest是一个绝对路径，需要转换为相对于当前上下文的相对路径
     */
    /**
     * remainingRequest:
     * F:\webpack-loader\webpack-loader-1\node_modules\css-loader\dist\cjs.js!F:\webpack-loader\webpack-loader-1\src\styles\index.css
     * 
     * relativeRequest:
     *  ../../node_modules/css-loader/dist/cjs.js!./index.css
     */
    const relativeRequest =
        remainingRequest
        .split('!')
        .map((part) => this.utils.contextify(this.context, part))
        .join('!');

    /**
     * 创建script语句并暴露出去，提供给构建工具，在打包时执行
     */
    const scripts = `
        import style from "!!${relativeRequest}"
        const styleEl = document.createElement('style')
        styleEl.innerHTML = style
        document.head.appendChild(styleEl)
    `;
    // style-loader是第一个loader, 由于return导致熔断，所以其他loader不执行了（不管是normal还是pitch）
    return scripts;
}

module.exports = styleLoader