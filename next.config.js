require('dotenv').config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/plasticfreemap' : '',
};