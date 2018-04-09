
Parse.Cloud.define('makeHost', function(request, response) {

	var query = new Parse.Query(Parse.User);
	query.equalTo("objectId", request.params.id);
	
	query.find({useMasterKey: true}).then(function(results) {
		response.success("Found user");
	}, function(error) {
		response.error(error)
	});
 	//response.success('Hello, World! ' + request.params.username + ' ID: ' + request.params.id);
});
