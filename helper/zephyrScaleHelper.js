const AdmZip = require("adm-zip")
const apiHelper = require("./apiHelper")

module.exports = {
    getTestCases () {
        const res =  apiHelper.sendGETRequest(
            "https://api.adaptavist.io/tm4j/v2/",
            "testcases",
            `Bearer ${process.env.ZEPHYR_ACCESS_TOKEN}`,
        )
        return res.body
    },

    getTestCase (testCaseKey) {
        const res =  apiHelper.sendGETRequest(
            "https://api.adaptavist.io/tm4j/v2/",
            `testcases/${testCaseKey}`,
            `Bearer ${process.env.ZEPHYR_ACCESS_TOKEN}`,
        )
        return res.body
    },

    getAllProjects () {
        const res =  apiHelper.sendGETRequest(
            "https://api.adaptavist.io/tm4j/v2/",
            `projects`,
            `Bearer ${process.env.ZEPHYR_ACCESS_TOKEN}`,
        )
        return res.body
    },

    postCucumberTestReport (
        projectKey = process.env.ZEPHYR_PROJECT_KEY,
        autoCreateTestCases = false,
        report
    ) {
        const zip = new AdmZip()
        zip.addLocalFolder(report)
        zip.writeZip("./cucumberResults/report.zip")
        const res =  apiHelper.sendPOSTWithFileRequest(
            "https://api.adaptavist.io/tm4j/v2/",
            `automations/executions/cucumber` +
        `?projectKey=${projectKey}` +
        "&" +
        `autoCreateTestCases=${autoCreateTestCases}`,
            `Bearer ${process.env.ZEPHYR_ACCESS_TOKEN}`,
            "cucumberResults/report.zip"
        )
        return res.body
    },
}
