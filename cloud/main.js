
Parse.Cloud.define('makeHost', function(req, res) {
  res.success('Hello, World! ' + request.params.username + ' ID: ' + request.params.id);
});
