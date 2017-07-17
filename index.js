const wptui = require("wpt-ui");

wptui.init({
  wptUrl: process.env.WEBPAGETEST_URL,
  wptApiKey: process.env.WEBPAGETEST_KEY,
  wptLocation: "ec2-ap-southeast-1:Chrome.Cable",
  wptRuns: 5,
  port: process.env.PORT
});

wptui.start();
