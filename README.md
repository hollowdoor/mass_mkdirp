mass-mkdirp
===========

Install
-------

`npm install --save mass-mkdirp`

Usage
-----

```javascript
var massMkdirp = require('mass-mkdirp');

massMkdirp('new', ['path', 'joined'], 'other/path').then(function(){
    console.log('done');
}).catch(function(e){
    console.log('failed!');
    console.log(e.stack);
});
```

Or:

```javascript
var massMkdirp = require('mass-mkdirp');

massMkdirp(['new', ['path', 'joined'], 'other/path']).then(function(){
    console.log('done');
}).catch(function(e){
    console.log('failed!');
    console.log(e.stack);
});
```

API
---

### massMkdirp(array|string, ...) -> promise

Accepts an array of paths, and a variable amount of path arguments.

Paths can be passed as arrays that will be automatically joined.

A promise is returned that resolves to all of the paths created.

Paths are created in parallel so the operations should be fairly fast.
