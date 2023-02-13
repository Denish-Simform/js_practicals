let edit_clicked = 0;

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
    let tbody = document.getElementById("tbody");
    let len = localStorage.length;
    tbody.innerHTML = "";
    for (let i = 1; i <= len; i++) {
        let newtr = document.createElement('tr');
        let row = localStorage.getItem(i.toString());
        const data_arr = JSON.parse(row);
        let td0 = document.createElement('td');
        td0.innerHTML = i;
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
        td7.innerHTML = "<button type='button' class='btn btn-primary edit' id='edit" + i + "'data-toggle='modal' data-target='#exampleModalCenter'>Edit</button>";
        let td8 = document.createElement('td');
        td8.innerHTML = "<button type='button' class='btn btn-danger delete' id='delete" + i + "'>Delete</button>";
        newtr.appendChild(td0);
        newtr.appendChild(td1);
        newtr.appendChild(td2);
        newtr.appendChild(td3);
        newtr.appendChild(td4);
        newtr.appendChild(td5);
        newtr.appendChild(td6);
        newtr.appendChild(td7);
        newtr.appendChild(td8);
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
    let len = localStorage.length + 1;
    let lenStr = len.toString();
    localStorage.setItem(lenStr, json_data);
}

function updateItem() {
    let id = edit_clicked;
    const whole_data = [];
    for (let i = 0; i < localStorage.length; i++) {
        whole_data.push(JSON.parse(localStorage.getItem(i+1)));
    }
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
    whole_data[id-1]['id'] = id;
    whole_data[id-1]['fname'] = fname;
    whole_data[id-1]['sname'] = sname;
    whole_data[id-1]['batch'] = batch;
    whole_data[id-1]['image'] = image;
    whole_data[id-1]['job'] = job;
    whole_data[id-1]['city'] = city;

    for (let i = 0; i < localStorage.length; i++) {
        let index = i+1;
        localStorage.setItem(index,JSON.stringify(whole_data[i]));
    }
    showTable();
}

let edit_btn = document.getElementsByClassName('edit');
let len_edit = edit_btn.length;
for (let i = 0; i < len_edit; i++) {
    edit_btn[i].addEventListener('click', function () {
        let button_id = this.id.slice(4);
        edit_clicked = button_id;
        let id = document.getElementById("edit_id");
        let fname = document.getElementById("edit_fname");
        let sname = document.getElementById("edit_sname");
        let batch = document.getElementById("edit_batch");
        let image = document.getElementById("edit_image");
        let display_image = document.getElementById("edit_display_image");
        let occupation = document.getElementsByName("edit_occupation");
        let city = document.getElementById("edit_city");
        let data = localStorage.getItem(button_id);
        let data_arr = JSON.parse(data);

        id.value = data_arr.id;
        fname.value = data_arr.fname;
        sname.value = data_arr.sname;
        batch.value = data_arr.batch;
        display_image.style.display = 'block';
        display_image.src = data_arr.image;
        for (const occ of occupation) {
            if (occ.value == data_arr.occupation) {
                occ.checked = true;
            }
        }
        city.value = data_arr.city;
    })
}

let delete_btn = document.getElementsByClassName('delete');
let len_del = delete_btn.length;
for (let i = 0; i < len_del; i++) {
    delete_btn[i].addEventListener('click', function () {
        let button_id = this.id.slice(6);
        console.log(button_id);
        localStorage.removeItem(button_id);
        location.reload();
    })

}