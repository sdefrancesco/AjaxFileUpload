var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/posts/add', upload.single('file'), function(req, res) {
  console.log('got a post reqeust')
  console.log(req.body)
  console.log(req.file)
  res.redirect('back')
})
module.exports = router;
