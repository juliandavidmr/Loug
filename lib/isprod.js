const readPkg = require('read-pkg');

module.exports = function () {
  var pkg = readPkg.sync();
  return pkg.production ? true : false;
  //=> {name: 'read-pkg', ...} 
}