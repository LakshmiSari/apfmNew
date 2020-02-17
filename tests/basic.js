/* globals gauge */
"use strict";

const { openBrowser, closeBrowser, goto, screenshot } = require('taiko')
const headless = process.env.headless_chrome.toLowerCase() === 'true'
const url = process.env.url;


beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();

});


gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};


