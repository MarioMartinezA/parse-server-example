
Parse.Cloud.define('makeHost', function(request, response) {
  response.success('Hello, World! ' + request.params.username + ' ID: ' + request.params.id);
});
