var flowStatus = require("./lib/flowStatus")
var flowResult = require("./lib/flowResult").prettyPrintError

function FlowtypeWebpackPlugin(options) {
    this._options = options || {}
    if (!this._options.cwd) {
        this._options.cwd = process.cwd()
    }
}

FlowtypeWebpackPlugin.prototype.apply = function(compiler) {
    var plugin = this

    compiler.hooks.emit.tap("FlowtypeWebpackPlugin", function(compilation) {
        const status = JSON.parse(flowStatus())
        if (!status.passed) {
            status.errors.map(e => compilation.errors.push(flowResult(e)))
        }
    })
}

module.exports = FlowtypeWebpackPlugin
