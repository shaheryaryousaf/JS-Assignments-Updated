// ==============================================
//  Question 1 
// ==============================================

// document.getElementById("submit").addEventListener("click", function (event) {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var address = document.getElementById("address").value;

//     document.getElementById("names").innerText = name;
//     document.getElementById("emails").innerText = email;
//     document.getElementById("phones").innerText = phone;
//     document.getElementById("addresses").innerText = address;

//     event.preventDefault();

// }, true);


// ==============================================
//  Question 2
// ==============================================

// function show() {
//     var dot = document.getElementById("dot");
//     var moreText = document.getElementById("moreText");
//     var btnText = document.getElementById("btn");

//     if (dot.style.display === "none") {
//         dot.style.display = "inline";
//         btnText.innerHTML = "Show More";
//         moreText.style.display = "none";
//     } else {
//         dot.style.display = "none";
//         btnText.innerHTML = "Show Less";
//         moreText.style.display = "inline";
//     }
// }



// =================================
// QUESTION 3
// =================================

var records = document.getElementById("records");

function add() {

    var id = document.getElementById("id");
    var name = document.getElementById("name");
    var classs = document.getElementById("class");

    // Create New tr for table
    var tr = document.createElement("tr");

    // create ID td
    var td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(id.value));

    // create NAME td
    var td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(name.value));

    // create CLASS td
    var td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(classs.value));

    // create Buttons TD and buttons
    var td4 = document.createElement("td");

    // Edit Btn
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-success btn-sm mr-2");
    editBtn.setAttribute("onclick", "newForm(this)");
    editBtn.appendChild(document.createTextNode("Edit"));

    // Delete Btn
    var delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn btn-danger btn-sm");
    delBtn.setAttribute("onclick", "deleteRecord(this)");
    delBtn.appendChild(document.createTextNode("Delete"));

    td4.appendChild(editBtn);
    td4.appendChild(delBtn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    records.append(tr);

    id.value = "";
    name.value = "";
    classs.value = "";
}

function deleteRecord(e) {
    e.parentNode.parentNode.remove();
}

function newForm(e) {
    var tr = e.parentNode.parentNode;

    var id = e.parentNode.parentNode.firstChild.nodeValue;

    document.getElementById("main-form").setAttribute("class", "hidden");
    document.getElementById("new-form").classList.remove("hidden");

    document.getElementById("newId").value = tr.childNodes[0].innerText;
    document.getElementById("newName").value = tr.childNodes[1].innerText;
    document.getElementById("newClass").value = tr.childNodes[2].innerText;
}