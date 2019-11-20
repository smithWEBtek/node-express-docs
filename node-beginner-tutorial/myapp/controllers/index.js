

exports.index = function (req, res, next) {
  res.render('index', { title: 'Express', body: 'This is just getting started, and using index controller.' });
}
