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
        const status_ = flowStatus()
        const status = status_ ? JSON.parse(status_) : null
        if (status && !status.passed) {
            status.errors.map(e => compilation.errors.push(flowResult(e)))

            if (plugin._options.forceFail) {
                status.errors.map(e => console.error(flowResult(e)))
                process.exit(1)
            }
        }
    })
}

module.exports = FlowtypeWebpackPlugin
