var exec = require('child_process').exec;

module.exports = function(callback) {
  exec('fortune -s', callback);
}
