let edit_clicked = 0;
let max = 0;
showTable();

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    storeData();

});

const reader = new FileReader();
function readURL(input) {
    document.getElementById("display_image").style.display = "block";

    if (input.files && input.files[0]) {


        reader.onload = function (e) {
            document.getElementById('display_image').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

const edit_reader = new FileReader();
function readURL_edit(input) {
    document.getElementById("edit_display_image").style.display = "block";

    if (input.files && input.files[0]) {


        edit_reader.onload = function (e) {
            document.getElementById('edit_display_image').src = e.target.result;
        }

        edit_reader.readAsDataURL(input.files[0]);
    }
}

function showTable() {
    let whole_data1 = [];
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let keys = Object.keys(localStorage);
    let len = keys.length;
    for (let i = 0; i < len; i++) {
        whole_data1.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    try {
        for (let i = 0; i < len; i++) {
            let newtr = document.createElement('tr');
            const data_arr = whole_data1[i];
            let td0 = document.createElement('td');
            td0.innerHTML = i + 1;
            let td1 = document.createElement('td');
            td1.innerHTML = data_arr.id;
            let td2 = document.createElement('td');
            td2.innerHTML = data_arr.fname;
            let td3 = document.createElement('td');
            td3.innerHTML = data_arr.sname;
            let td4 = document.createElement('td');
            td4.innerHTML = data_arr.batch;
            let td5 = document.createElement('td');
            td5.innerHTML = "<img src=" + data_arr.image + " class='table_image'>";
            let td6 = document.createElement('td');
            td6.innerHTML = data_arr.occupation;
            let td7 = document.createElement('td');
            td7.innerHTML = "<button type='button' class='btn btn-primary edit me-2' onclick='edit_data(" + data_arr.id + ")' data-toggle='modal' data-target='#exampleModalCenter'>Edit</button>" + "<button type='button' class='btn btn-danger delete' id='delete" + i + 1 + "' onclick='delete_btn(" + data_arr.id + ")'>Delete</button>";
            newtr.appendChild(td0);
            newtr.appendChild(td1);
            newtr.appendChild(td2);
            newtr.appendChild(td3);
            newtr.appendChild(td4);
            newtr.appendChild(td5);
            newtr.appendChild(td6);
            newtr.appendChild(td7);
            tbody.appendChild(newtr);
        }
    } catch (err) {
        let newtr = document.createElement('tr');

        let td0 = document.createElement('td');
        td0.setAttribute("colspan", "8");
        td0.innerHTML = "No data found";
        newtr.appendChild(td0);
        tbody.appendChild(newtr);

    }

}

function storeData() {
    let id = document.getElementById("id").value;
    let fname = document.getElementById("fname").value;
    let sname = document.getElementById("sname").value;
    let batch = document.getElementById("batch").value;
    let occupation = document.getElementsByName("occupation");
    let job;
    for (const occ of occupation) {
        if (occ.checked) {
            job = occ.value;
            break;
        }
    }
    let city = document.getElementById("city").value;
    let image = reader.result;
    const data = new Object();
    data.id = id;
    data.fname = fname;
    data.sname = sname;
    data.batch = batch;
    data.image = image;
    data.occupation = job;
    data.city = city;
    var json_data = JSON.stringify(data);
    let keys = Object.keys(localStorage);
    if (keys.length != 0) {
        max = Math.max(...keys);
    } else {
        max = 0;
    }
    var len = max + 1;
    let lenStr = len.toString();
    localStorage.setItem(lenStr, json_data);
    location.reload();
}

function updateItem() {
    let id = document.getElementById("edit_id").value;
    let fname = document.getElementById("edit_fname").value;
    let sname = document.getElementById("edit_sname").value;
    let batch = document.getElementById("edit_batch").value;
    let occupation = document.getElementsByName("edit_occupation");
    let job;
    for (const occ of occupation) {
        if (occ.checked) {
            job = occ.value;
            break;
        }
    }
    let city = document.getElementById("edit_city").value;
    let image = document.getElementById("edit_image").value;
    image = document.getElementById('edit_display_image').src;
    const data = new Object();
    data.id = id;
    data.fname = fname;
    data.sname = sname;
    data.batch = batch;
    data.image = image;
    data.occupation = job;
    data.city = city;
    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        let row = JSON.parse(localStorage.getItem(keys[i]));
        if (row.id == data.id) {
            localStorage.setItem(keys[i], JSON.stringify(data));
        }
    }
    showTable();
}

function edit_data(row_id) {
    edit_clicked = row_id;
    let id = document.getElementById("edit_id");
    let fname = document.getElementById("edit_fname");
    let sname = document.getElementById("edit_sname");
    let batch = document.getElementById("edit_batch");
    let image = document.getElementById("edit_image");
    let display_image = document.getElementById("edit_display_image");
    let occupation = document.getElementsByName("edit_occupation");
    let city = document.getElementById("edit_city");


    // let data = localStorage.getItem(button_id);
    // let data_arr = JSON.parse(data);
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        let row = JSON.parse(localStorage.getItem(keys[i]));
        if (row.id == row_id) {
            id.value = row.id;
            fname.value = row.fname;
            sname.value = row.sname;
            batch.value = row.batch;
            display_image.style.display = 'block';
            display_image.src = row.image;
            for (const occ of occupation) {
                if (occ.value == row.occupation) {
                    occ.checked = true;
                }
            }
            city.value = row.city;
            break;
        }
    }

}

function delete_btn(id) {
    let keys = Object.keys(localStorage);
    if (confirm("Are you sure you want to Delete?") == true) {
        for (let i = 0; i < keys.length; i++) {
            let row = JSON.parse(localStorage.getItem(keys[i]));
            if (row.id == id) {
                localStorage.removeItem(keys[i]);
            }
        }
    }
    location.reload();

}
