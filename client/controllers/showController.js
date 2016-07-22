myApp.controller('showController', function($scope, $location, userFactory){

	// this is an example of me passing the userFactory to multiple controllers

	userFactory.getUser(function(user){
		$scope.user = user;
	})

})