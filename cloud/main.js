Parse.Cloud.define('makeHost', function(request, response) {

	var query = new Parse.Query(Parse.User);
	query.equalTo("objectId", request.params.id);

	query.first({
    	useMasterKey: true,
    	success: function(Objects) {
    		Objects.set("type","host");
     		Objects.save(null, {
	        	useMasterKey: true,
	        	success: function(user) {
	        		response.success('success');
        		},
		        error: function(error) {
		        	response.error(error);
		        }
      		});
	    },
	    error: function(error) {
	    	response.error(error);
	    }
  	});
});


Parse.Cloud.define('makeUser', function(request, response) {

	var query = new Parse.Query(Parse.User);
	query.equalTo("objectId", request.params.id);

	query.first({
    	useMasterKey: true,
    	success: function(Objects) {
    		Objects.set("type","user");
     		Objects.save(null, {
	        	useMasterKey: true,
	        	success: function(user) {
	        		response.success('success');
        		},
		        error: function(error) {
		        	response.error(error);
		        }
      		});
	    },
	    error: function(error) {
	    	response.error(error);
	    }
  	});
});