/*
* Author: Ioannis Doumenis
* Assignment: WE3.1 Mobile Web Applications, Digital Skills Academy
* Student ID: D13126770
* Date : 2014/06/15
*/

	//first I am creating the controller with the scope object
	function ToDoController($scope) {

		//insering a couple of (hardcoded) items into it as an array of objects
		$scope.toDoListItems=[{name:'Dentist', description:'Clean teeth and treat gums'}, 
							  {name:'Tesco', description:'Bread, milk, cheese, ham, butter'}
		];

		//this is the function that inserts the user input (newTask variables) via the scope into the ordered list (view)
		$scope.addToDo = function () {
			$scope.toDoListItems.push(
				{
				  name: $scope.newTask.name,
				  description: $scope.newTask.description
				}
			);
		}

		// this is the function called by the delete href in the view and which simply deletes the relevant list item
		$scope.delete = function ( index ) {
    		$scope.toDoListItems.splice(index, 1);
		};
	}
