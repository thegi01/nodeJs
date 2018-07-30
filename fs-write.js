const fs = require('fs');

fs.open('mylife', 'wx', (err, fd)=>{
    if(err){
        if(err.code='EEXIST'){
            console.error('mylife already exists');
            return;
        }
        throw err;
    }

    writeMydata(fd);
    
});

