var selectRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectRow == null)
        {   
            insertRecord(formData);
        }
        else
        {   
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    
    formData["userName"] = document.getElementById("userName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["age"] = document.getElementById("age").value;
    formData["course"] = document.getElementById("course").value;
    formData["cn"] = document.getElementById("cn").value;
    return formData;
}

function insertRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.course;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cn;
    
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("cn").value = "";
   
    selectRow = null;
}
function onDelete(td) {
    if (confirm('Do You Want To Delete This ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectRow.cells[1].innerHTML;
    document.getElementById("age").value = selectRow.cells[2].innerHTML;
    document.getElementById("course").value = selectRow.cells[3].innerHTML;
    document.getElementById("cn").value = selectRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.userName;
    selectRow.cells[1].innerHTML = formData.rollNo;
    selectRow.cells[2].innerHTML = formData.age;
    selectRow.cells[3].innerHTML = formData.course;
    selectRow.cells[4].innerHTML = formData.cn;
}

function validate() {
    isValid = true;
 
    if (document.getElementById("userName").value =="") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
        
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    
    if (document.getElementById("rollNo").value == "") {
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide"))
        {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }
    
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("CoursevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("CoursevalidationError").classList.contains("hide"))
        {
            document.getElementById("CoursevalidationError").classList.add("hide");
        }
    }

    if (document.getElementById("cn").value == "") {
        isValid = false;
        document.getElementById("ContactvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ContactvalidationError").classList.contains("hide"))
        {
            document.getElementById("ContactvalidationError").classList.add("hide");
        }
    }
   
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}