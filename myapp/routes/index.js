var express = require('express');
var router = express.Router();

// Respond with Hello World! on the homepage:
router.get('/', function (req, res) {
  res.send('Hello World!')
})

router.get('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  res.send('Accessing the secret section ...!')
  // next() // pass control to the next handler
})


// Respond to POST request on the root route (/), the application’s home page:
router.post('/', function (req, res) {
  res.send('Got a POST request')
})

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  next(createError(404));
});


module.exports = router;
