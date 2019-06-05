var psi = require('psi');
var site = 'http://www.html5rocks.com';
var key = '';

// Please feel free to use the `nokey` option to try out PageSpeed
// Insights as part of your build process. For more frequent use,
// we recommend registering for your own API key. For more info:
// https://developers.google.com/speed/docs/insights/v2/getting-started

const mobile = () => {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(data => {
        console.log(`Speed score: ${data.ruleGroups.SPEED.score}`);
        console.log(`Usability score: ${data.ruleGroups.USABILITY.score}`);
    });
}

const desktop = () => {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(data => {
        console.log(`Speed score: ${data.ruleGroups.SPEED.score}`);
    });
}

exports.mobile = mobile;
exports.desktop = desktop;
exports.default = mobile;