var fs = require('fs')
var strApi = require('./stringApi')

fs.readFile('file.txt', 'utf-8', function(err, str){
    if(err){
        console.log('error...')
    }else{
        var strAfter = strApi.replaceDigit(str)
        console.log(strAfter)
    }
    fs.writeFile('fileAfter.txt', strAfter, function(err){
        if (err) throw err;
        console.log('The file has been saved!');
      });

});

var str = 'jirengu'
console.log(str)
console.log('hello world')