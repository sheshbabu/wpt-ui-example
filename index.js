const wptui = require("wpt-ui");

wptui.init({
  url: process.env.WEBPAGETEST_URL,
  k: process.env.WEBPAGETEST_KEY,
  location: "ec2-ap-southeast-1:Chrome.Cable",
  runs: 5,
  port: 80
});

wptui.start();
