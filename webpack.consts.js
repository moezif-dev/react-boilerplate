const path = require('path');

const SRC_FOLDER = path.join(__dirname + '/src');
const BUILD_DIST = path.join(__dirname + '/public');
const ENTRY_POINT = path.join(SRC_FOLDER, 'index.js');
const HTML_TEMPLATE = path.join(SRC_FOLDER, 'index.html');

module.exports = {
  SRC_FOLDER,
  BUILD_DIST,
  ENTRY_POINT,
  HTML_TEMPLATE,
}