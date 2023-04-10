const path = require('path')
const multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(file.mimetype == "application/pdf"){
            callback(null, true)
        }
        else{
            console.log("only pdf is supported")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload