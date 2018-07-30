const fs = require('fs');

// if options is a string. then it specifies the encdoing.
/*fs.appendFile('message.txt', 'data to append', 'utf8', (err)=>{
    if(err) throw err;
    console.log('The "data to append" was appended to file!');
});*/

fs.open('message.js', 'a', (err, fd)=>{
    if(err) throw err;
    console.log('fd', fd);
    fs.appendFile(fd, 'data to append', 'utf8', (err)=>{
        fs.close(fd, (err)=>{
            if(err) throw err;
        });
        if(err) throw err;
    });
});