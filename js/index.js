$(function(){
    $.getJSON('http://localhost:8080/SimpleProject/webapi/employees', function(employees){
    	console.log(employees);
    	$.each(employees, function(i, employee){
    		console.log(employee);
    		var $employeeTable = $('.employees');
    		$employeeTable.append('<tr><td>' + employee.id 
    			+ '</td><td>' + employee.firstName 
    			+ '</td><td>' + employee.lastName 
    			+ '</td><td>' + employee.status 
    			+ '</td><td><a href="employee.html?id=' + employee.id + '"><button>Details</button></a></td></tr>');
    	});
    });
});