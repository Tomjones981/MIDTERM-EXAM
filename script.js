
var selectedRow = null;

function onFormSubmit(e){

    event.preventDefault();

    var formData = readFormData();

    if(selectedRow === null){

        insertNewRecord(formData);

    }else{

        updateRecord(formData)

    }

    resetForm();

    }

// Read operation using this function

function readFormData(){

    var formData = {};
   
    formData["firstName"] = document.getElementById("firstName").value;

    formData["middleName"] = document.getElementById("middleName").value;

    formData["lastName"] = document.getElementById("lastName").value;

    formData["age"] = document.getElementById("age").value;

    formData["gender"] = document.getElementById("gender").value;

    formData["birthday"] = document.getElementById("birthday").value;

    formData["course"] = document.getElementById("course").value;

    formData["schoolyear"] = document.getElementById("schoolyear").value;

    return formData;

}



// Create operation

function insertNewRecord(data){
    
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);

        cell1.innerHTML = data.firstName;

    var cell2 = newRow.insertCell(1);

        cell2.innerHTML = data.middleName;

    var cell3 = newRow.insertCell(2);

        cell3.innerHTML = data.lastName;

    var cell4 = newRow.insertCell(3);

        cell4.innerHTML = data.age;

    var cell5 = newRow.insertCell(4);

        cell5.innerHTML = data.gender;

    var cell6 = newRow.insertCell(5);

        cell6.innerHTML = data.birthday;

    var cell7 = newRow.insertCell(6);

        cell7.innerHTML = data.course;
    
    var cell8 = newRow.insertCell(7);

        cell8.innerHTML = data.schoolyear;


    var cell7 = newRow.insertCell(8);

        cell7.innerHTML = `<a href="#" onClick='onEdit(this)'>Update</a>

                        <a href="#" onClick='onDelete(this)'>Delete</a>`;

}



// To Reset the data of fill input

function resetForm(){

    document.getElementById('firstName').value = '';

    document.getElementById('middleName').value = '';

    document.getElementById('lastName').value = '';

    document.getElementById('age').value = '';

    document.getElementById('gender').value = '';

    document.getElementById('birthday').value = '';

    document.getElementById('course').value = '';

    document.getElementById('schoolyear').value = '';

    selectedRow = null;

}



// For Edit operation

function onEdit(td){

    selectedRow = td.parentElement.parentElement;

    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;

    document.getElementById('middleName').value = selectedRow.cells[1].innerHTML;

    document.getElementById('lastName').value = selectedRow.cells[2].innerHTML;

    document.getElementById('age').value = selectedRow.cells[3].innerHTML;

    document.getElementById('gender').value = selectedRow.cells[4].innerHTML;

    document.getElementById('birthday').value = selectedRow.cells[5].innerHTML;

    document.getElementById('course').value = selectedRow.cells[6].innerHTML;

    document.getElementById('schoolyear').value = selectedRow.cells[7].innerHTML;

}

function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.firstName;

    selectedRow.cells[1].innerHTML = formData.middleName;

    selectedRow.cells[2].innerHTML = formData.lastName;

    selectedRow.cells[3].innerHTML = formData.age;

    selectedRow.cells[4].innerHTML = formData.gender;

    selectedRow.cells[5].innerHTML = formData.birthday;

    selectedRow.cells[6].innerHTML = formData.course;

    selectedRow.cells[7].innerHTML = formData.schoolyear;



}

function onDelete(td){

    if(confirm('Are you sure you want to delete this record?')){

        row = td.parentElement.parentElement;

        document.getElementById('employeeList').deleteRow(row.rowIndex);

        resetForm();

    }    

}



