const readPkg = require('read-pkg-up');

var pkg = readPkg.sync();

module.exports = function () {  
  // console.log(pkg)
  return pkg.pkg.production ? true : false;
  //=> {name: 'read-pkg', ...} 
}