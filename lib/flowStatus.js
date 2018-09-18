var flowBin = require("flow-bin")
var execSync = require("child_process").execSync

function flowStatus(cwd) {
    let s
    try {
        s = execSync(`${flowBin} status --json`, { cwd: cwd }).stdout
    } catch (e) {
        s = e.stdout
    }

    return s
}

module.exports = flowStatus
