var mkdirp = require('mkdirp-omen'),
    fsExists = require('fs-promise').exists,
    path = require('path');
/* mass-mkdirp
git remote add origin https://github.com/hollowdoor/mass_mkdirp.git
git push -u origin master
*/
function MassDirp(dirs){
    if(arguments.length){
        dirs = Array.prototype.slice.call(arguments);
    }

    dirs = dirs.map(function(dir){
        return typeof dir === 'string' ? dir : path.join.apply(path, dir);
    }).filter(function(dir){
        return typeof dir === 'string';
    });

    return Promise.all(dirs.map(function(dir){
        return fsExists(dir).then(function(exists){
            if(exists){
                return dir;
            }

            return Promise.resolve(mkdirp(dir).then(function(){
                return Promise.resolve(dir);
            }));
        });
    }));
}

module.exports = MassDirp;

function type(o){
    return Object.prototype.toString.call(o);
}
