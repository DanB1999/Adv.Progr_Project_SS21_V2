var express = require('express');
var router = express.Router();
/*
var path = require('path');

module.exports = (function () {
  return path.dirname(require.main.filename || process.mainModule.filename);
})();
var root = require('root'); // In root will be absolute path to your application
*/
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    console.log('req.files >>>', req.files); // eslint-disable-line

    sampleFile = req.files.sampleFile;

    uploadPath = __dirname + '/uploads/' + sampleFile.name;

    console.log('uploadPath:' + uploadPath);
    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded to ' + uploadPath);
    });
});

module.exports = router;