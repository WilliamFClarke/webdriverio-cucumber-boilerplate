require("dotenv").config()

// import default config
const defaultConfig = require("./wdio.conf").config

const capabilities = [
    {
        os: "Windows",
        os_version: "10",
        browser: "Chrome",
        browser_version: "84.0 beta",
        resolution: "1024x768",
        project: "Tracking Test",
        build:
			`${process.env.BROWSERSTACK_USERNAME  } ${  new Date().toLocaleString()}`,
    },
    {
        os: "OS X",
        os_version: "Catalina",
        browser: "Safari",
        browser_version: "13.0",
        resolution: "1024x768",
        project: "Tracking Test",
        build:
			`${process.env.BROWSERSTACK_USERNAME  } ${  new Date().toLocaleString()}`,
    },
    // {
    // 	os: "OS X",
    // 	os_version: "Catalina",
    // 	browser: "Chrome",
    // 	browser_version: "84.0 beta",
    // 	resolution: "1024x768",
    // 	project: "Tracking Test",
    // 	build:
    // 		process.env.BROWSERSTACK_USERNAME + " " + new Date().toLocaleString(),
    // },
    {
        os: "Windows",
        os_version: "10",
        browser: "Firefox",
        browser_version: "75.0 beta",
        resolution: "1024x768",
        project: "Tracking Test",
        build:
			`${process.env.BROWSERSTACK_USERNAME  } ${  new Date().toLocaleString()}`,
    },
    // {
    // 	os: "Windows",
    // 	os_version: "10",
    // 	browser: "Edge",
    // 	browser_version: "81",
    // 	resolution: "1024x768",
    // 	project: "Tracking Test",
    // 	build:
    // 		process.env.BROWSERSTACK_USERNAME + " " + new Date().toLocaleString(),
    // },
]
// delete path property
delete defaultConfig.path

// clone default conf and setup  browserstack

const browserstackConfig = Object.assign(defaultConfig, {
    services: ["browserstack"],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_PASSWORD,
    browserstackLocal: false,
    capabilities,
})

exports.config = browserstackConfig
