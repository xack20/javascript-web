const fs = require('fs');
const packageLock = require('./package-lock.json');
const package = require('./package.json');

package.dependencies = Object.entries(packageLock.dependencies)
.reduce((deps, [dep, { version }]) => Object.assign(deps, { [dep]: version }), {});

fs.writeFileSync('./package-new.json', JSON.stringify(package, null, 2));