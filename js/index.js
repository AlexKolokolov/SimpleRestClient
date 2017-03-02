$(function(){
    $.getJSON('http://localhost:8080/SimpleProject/webapi/employees', function(employees){
    	console.log(employees);
    	$.each(employees, function(i, employee){
    		// console.log(employee);
    		var $employeeTable = $('.employees');
    		$employeeTable.append('<tr><td>' + employee.id 
    			+ '</td><td>' + employee.firstName 
    			+ '</td><td>' + employee.lastName 
    			+ '</td><td>' + employee.status 
    			+ '</td><td><a href="employee.html?id=' + employee.id + '"><button>Details</button></a></td></tr>');
    	});
    });

    $('form').submit(function(event){
        var data = $('form').serializeArray();

        var jsonEmployee = arrayToJson(data);
        console.log(jsonEmployee);
        $.ajax({
            url: "http://localhost:8080/SimpleProject/webapi/employees",
            type: "POST",
            data: jsonEmployee,
            dataType: "application/json",
            contentType: "application/json"
        });
        console.log("Employe " + jsonEmployee + " has been posted");

        event.preventDefault();
    });

    function arrayToJson(array) {
        var object = {};
        $.map(array, function(n, i) {
            object[n['name']] = n['value'];
        });
        return JSON.stringify(object);
    }
});