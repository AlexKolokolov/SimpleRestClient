$(function(){
    $.getJSON('http://localhost:8080/SimpleProject/webapi/employees', function(employees){
    	console.log(employees);
    	$.each(employees, function(i, employee){
    		console.log(employee);
    		$('.employees').append('<tr><td>' + employee.id + '</td><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td>');
    		$('.employees').append('</tr>');
    	});
    });
});