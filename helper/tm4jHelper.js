var AdmZip = require("adm-zip");
var apiHelper = require("../helper/apiHelper.js");

module.exports = {
  getTestCases:  function () {
    var res =  apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      "testcases",
      `Bearer ${process.env.ACCESS_TOKEN}`,
    );
    return res.body;
  },

  getTestCase:  function (testCaseKey) {
    var res =  apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `testcases/${testCaseKey}`,
      `Bearer ${process.env.ACCESS_TOKEN}`,
    );
    return res.body;
  },

  getAllProjects:  function () {
    var res =  apiHelper.sendGETRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `projects`,
      `Bearer ${process.env.ACCESS_TOKEN}`,
    );
    return res.body;
  },

  postCucumberTestReport:  function (
    projectKey = process.env.PROJECT_KEY,
    autoCreateTestCases = false,
    report
  ) {
    var zip = new AdmZip();
    zip.addLocalFolder(report);
    zip.writeZip("./cucumberResults/report.zip");
    var res =  apiHelper.sendPOSTWithFileRequest(
      "https://api.adaptavist.io/tm4j/v2/",
      `automations/executions/cucumber` +
        `?projectKey=${projectKey}` +
        "&" +
        `autoCreateTestCases=${autoCreateTestCases}`,
      `Bearer ${process.env.ACCESS_TOKEN}`,
      "cucumberResults/report.zip"
    );
    return res.body;
  },
};
