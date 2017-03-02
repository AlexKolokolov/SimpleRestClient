$(function(){
    $.getJSON('http://localhost:8080/SimpleProject/webapi/employees', function(employees){
    	console.log(employees);
        var $employeeTable = $('#employees');
    	$.each(employees, function(i, employee){
    		$employeeTable.append('<tr>',
                '<td>' + employee.id + '</td>',
    			'<td>' + employee.firstName + '</td>',
    			'<td>' + employee.lastName + '</td>',
                '<td>' + employee.department.name + '</td>', 
    			'<td>' + employee.status + '</td>',
    			'<td><a href="employee.html?id=' + employee.id + '"><button>Details</button></a></td>',
                '</tr>');
            // $employeeTable.append('<tr>');
            // $employeeTable.append('<tr><td>' + employee.id + '</td>');
            // $employeeTable.append('<td>' + employee.firstName + '</td>');
            // $employeeTable.append('<td>' + employee.lastName + '</td>');
            // $employeeTable.append('<td>' + employee.department.name + '</td>'); 
            // $employeeTable.append('<td>' + employee.status + '</td>');
            // $employeeTable.append('<td><a href="employee.html?id=' + employee.id + '"><button>Details</button></a></td></tr>');
    	});
    });

    //fill department selector with departments
    $.getJSON('http://localhost:8080/SimpleProject/webapi/departments', function(departments){
        console.log(departments);
        var $selectDepartment = $('#selectDepartment');
        $.each(departments, function(i, department){                                 
            console.log(department);
            console.log(JSON.stringify(department));
            $selectDepartment.append('<option value=\'' + JSON.stringify(department) + '\'>' + department.name + '</option>');
        });
    });

    $.getJSON('http://localhost:8080/SimpleProject/webapi/departments/statistics', function(statistics){
        console.log(statistics);
        var $depStat = $('#depStat');
        $.each(statistics, function(i, stat){
            $depStat.append('<tr>',
                '<td>' + stat.department + '</td>',
                '<td>' + stat.employeesNumber + '</td>',
                '<td>' + stat.minSalary + '</td>',
                '<td>' + stat.maxSalary + '</td>', 
                '<td>' + stat.totalSalary + '</td>',
                '<td>' + stat.averageSalary + '</td>',
                '<td>' + stat.womenNumber + '</td>',
                '</tr>');    
        });
    });

    $('form').submit(function(event){
        var data = $(this).serializeArray();
        console.log(data);
        var jsonEmployee = arrayToJson(data);
        console.log(jsonEmployee);
        $.ajax({
            url: "http://localhost:8080/SimpleProject/webapi/employees",
            type: "POST",
            data: jsonEmployee,
            dataType: "application/json",
            contentType: "application/json"
        });
        console.log("Employee " + jsonEmployee + " has been posted");

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