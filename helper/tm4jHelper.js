var AdmZip = require("adm-zip");
var apiHelper = require("../helper/apiHelper.js");

module.exports = {
  getTestCases: async function () {
    var res = await apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      "testcases"
    );
    return res.body;
  },

  getTestCase: async function (testCaseKey) {
    var res = await apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `testcases/${testCaseKey}`
    );
    return res.body;
  },

  getAllProjects: async function () {
    var res = await apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `projects`
    );
    return res.body;
  },

  postCucumberTestReport: async function (
    projectKey = 53610,
    autoCreateTestCases = false,
    report
  ) {
    var zip = new AdmZip();
    zip.addLocalFolder(report);
    zip.writeZip("./cucumberResults/report.zip");
    var res = await apiHelper.sendPOSTWithFileRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `automations/executions/cucumber` +
        `?projectKey=${projectKey}` +
        "&" +
        `autoCreateTestCases=${autoCreateTestCases}`,
      "cucumberResults/report.zip"
    );
    return res.body;
  },
};
