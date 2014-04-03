var spawn = require('child_process').spawn;
module.exports = function () {
  if (require('os').platform() === 'darwin') {
    return spawn(__dirname + '/bin/imagesnap', ['-']).stdout;
  } else {
    return spawn('fswebcam', ['-q', '-']).stdout;
  }
}