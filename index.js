var mkdirp = require('mkdirp-omen'),
    fsExists = require('fs-promise').exists,
    pathJoin = require('path').join;
/* mass-mkdirp
git remote add origin https://github.com/hollowdoor/mass_mkdirp.git
git push -u origin master
*/
function MassDirp(dirs){
    if(arguments.length){
        dirs = Array.prototype.slice.call(arguments);
    }

    dirs = dirs.map(function(dir){
        return type(dir) === '[object Array]' ?
               pathJoin.apply(pathJoin, dir) :
               dir;
    }).filter(function(dir){
        return typeof dir === 'string';
    });

    return Promise.all(dirs.map(function(dir){
        return fsExists(dir).then(function(exists){
            if(exists){
                return dir;
            }

            return mkdirp(dir).then(function(){
                return dir;
            });
        });
    }));
}

module.exports = MassDirp;

function type(o){
    return Object.prototype.toString.call(o);
}
