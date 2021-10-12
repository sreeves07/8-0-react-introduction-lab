const Parser = require("junitxml-to-javascript");
const { notifyFail, notifyPass } = require("./notifySlack");

const passed = (suite) => suite.succeeded === suite.tests;

/**
 * Determine how many test files passed and call notify functions
 */
const parseAllFiles = async () => {
  const fileName = __dirname + "/../reports/junit/junit.xml";
  const { testsuites } = await new Parser().parseXMLFile(fileName);

  const numSuites = testsuites.length;
  let passedSuites = testsuites.filter((ts) => passed(ts)).map((ts) => ts.name);
  let failedSuites = testsuites
    .filter((ts) => !passed(ts))
    .map((ts) => ts.name);
  let allPassed = passedSuites.length === numSuites;

  if (allPassed) {
    notifyPass(numSuites);
  } else {
    notifyFail({ numSuites, passedSuites, failedSuites });
  }
};

parseAllFiles();
