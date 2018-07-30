const fs = require('fs');

fs.open('mylife', 'r', (err, fd) => {
    if(err){
        if(err.code='ENOENT'){
            console.error('mylife does enot exist');
            return;
        }
        throw err;
    }

    readMyData(fd);
});