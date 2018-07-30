const fs = require('fs');

/*
try{
    fs.appendFileSync('message.js', 'data to append', 'utf8');
    console.log('The "data to append" was appended to file!');
} catch(err){
    // handle the error
}
*/

/*
The file may be specified as a numeric file descriptor that has been opened for appending (using fs.open() or fs.openSync()). The file descriptor will not be closed automatically.
*/
let fd;
try{
    fd = fs.openSync('message.js', 'a');
    fs.appendFileSync(fd, 'data to append', 'utf8');
} catch(err){
    // Handle the error
} finally{
    if( fd != undefined )
        fs.closeSync(fd);
}

