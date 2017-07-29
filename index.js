const wptui = require("wpt-ui");
const dotenv = require("dotenv");

dotenv.load();

wptui.start({
  wptUrl: process.env.WEBPAGETEST_URL,
  wptApiKey: process.env.WEBPAGETEST_KEY,
  wptLocation: "ec2-ap-southeast-1:Chrome.Cable",
  wptRuns: 5,
  dbConnectionString: process.env.DATABASE_URL,
  port: process.env.PORT
});
