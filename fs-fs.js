/* File System */

/* 1. Asynchronous version */
/*
const fs = require('fs');
fs.unlink('./tmp/hello.js', (err)=>{
    if(err) throw err;
    console.log('succefully deleted /tmp/hello.js')
});
*/


/* 2. Synchronous version */
/*
const fs = require('fs');
fs.unlinkSync('tmp/hello.js');
console.log('succefully deleted /tmp/hello.js')
*/


/* 3. With the asynchronous methods there is no guaranteed ordering. So the following is prone to error: */
/*
const fs = require('fs');
fs.rename('./tmp/hello.js', './tmp/world.js', (err) => {
    if(err) throw err;
    console.log('renamed complete');
});
fs.stat('./tmp/world.js', (err, stats) => {
    if(err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});
// Error: ENOENT: no such file or directory, stat 'D:\01.workspace\100.pullipCode\nodeJs\tmp\world.js' at Error (native)
*/


/* 3-2. It could be that fs.stat is executed before fs.rename. The correct way to do this is to chain the callbacks. */
const fs = require('fs');
fs.rename('./tmp/hello.js', './tmp/world.js', (err) => {
    if(err) throw err;
    fs.stat('./tmp/world.js', (err, stats) => {
        if(err) throw err;
        console.log('stats', stats);
        console.log(`stats : ${JSON.stringify(stats)}`);
    });
});
