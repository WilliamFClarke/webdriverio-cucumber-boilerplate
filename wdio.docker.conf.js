require("dotenv").config()

const defaultConfig = require("./wdio.conf").config

const maxInstances = 5
const capabilities = [
    {
        maxInstances: 5,
        browserName: "chrome",
        "goog:chromeOptions": {
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            args: ["--headless", "--disable-gpu"],
        },
    },
    // {
    // 	maxInstances: 5,
    // 	browserName: "firefox",
    // 	"moz:firefoxOptions": {
    // 		args: ["-headless"],
    // 	},
    // },
]
delete defaultConfig.path

const DockerConfig = Object.assign(defaultConfig, {
    capabilities,
    maxInstances,
})

exports.config = DockerConfig
