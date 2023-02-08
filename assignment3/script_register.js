function validateForm() {

    var notallowedChar = /[0-9]/;

    // id
    let id = document.getElementById("id");
    if (id.value === "") {
        let err = document.getElementById("id_error");
        err.innerHTML = "Enter valid ID!!"
        err.style.display = "inline-block";
    }

    // fname
    let fname = document.getElementById("fname");
    if (notallowedChar.exec(fname.value)) {
        let err = document.getElementById("fame_error");
        err.innerHTML = "Enter valid First Name!!"
        err.style.display = "inline-block";
        city.value = "";
    } else if (fname.value === "") {
        let err = document.getElementById("fname_error");
        err.innerHTML = "Enter First Name!!"
        err.style.display = "inline-block";
        fname.value = "";
    }

    // sname
    let sname = document.getElementById("sname");
    if (notallowedChar.exec(sname.value)) {
        let err = document.getElementById("sname_error");
        err.innerHTML = "Enter valid Second Name!!"
        err.style.display = "inline-block";
        city.value = "";
    } else if (sname.value === "") {
        let err = document.getElementById("sname_error");
        err.innerHTML = "Enter Second Name!!"
        err.style.display = "inline-block";
        sname.value = "";
    }

    // batch
    let batch = document.getElementById("batch");
    if (batch.value === "none") {
        let err = document.getElementById("batch_error");
        err.innerHTML = "Select batch!!"
        err.style.display = "inline-block";
        batch.value = "";
    }

    // img
    let img = document.getElementById("image");
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(img.value)) {
        let err = document.getElementById("img_error");
        err.innerHTML = "Select image!!"
        err.style.display = "inline-block";
        img.value = '';
    } else if (img.value === "") {
        let err = document.getElementById("img_error");
        err.innerHTML = "Select image!!"
        err.style.display = "inline-block";
        img.value = '';
    } else {
        if (img.files && img.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById(
                    'display_image').src = e.target.result;
            };

            reader.readAsDataURL(img.files[0]);
        }
    }

    // occupation
    let occupation = document.getElementById("occupation");
    if (occupation.value == "--Select Occupation--") {
        let err = document.getElementById("occupation_error");
        err.innerHTML = "Please select!!"
        err.style.display = "inline-block";
        occupation.value = "";
    }

    // city
    let city = document.getElementById("city");
    if (notallowedChar.exec(city.value)) {
        let err = document.getElementById("city_error");
        err.innerHTML = "Enter valid city!!"
        err.style.display = "inline-block";
        city.value = "";
    } else if (city.value == "") {
        let err = document.getElementById("city_error");
        err.innerHTML = "Enter valid city!!"
        err.style.display = "inline-block";
        city.value = "";
    }
}

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

function showTable() {
    // location.reload();
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
        td7.innerHTML = "<button type='button' class='btn btn-primary edit' id='edit" + i + "'>Edit</button>";
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
    let image;
    if (edit_clicked > 0) {
        image = document.getElementById('display_image').src;
        localStorage.removeItem(edit_clicked);
        console.log(image);
    } else {
        image = reader.result;
        localStorage.removeItem(edit_clicked);
    }
    const data = new Object();
    data.id = id;
    data.fname = fname;
    data.sname = sname;
    data.batch = batch;
    data.image = image;
    data.occupation = job;
    data.city = city;

    console.log(data);

    var json_data = JSON.stringify(data);
    let len = localStorage.length + 1;
    let lenStr = len.toString();
    localStorage.setItem(lenStr, json_data);
}
let edit_btn = document.getElementsByClassName('edit');
let len_edit = edit_btn.length;
for (let i = 0; i < len_edit; i++) {
    edit_btn[i].addEventListener('click', function () {
        let button_id = this.id.slice(4);
        edit_clicked = button_id;
        let id = document.getElementById("id");
        let fname = document.getElementById("fname");
        let sname = document.getElementById("sname");
        let batch = document.getElementById("batch");
        let image = document.getElementById("image");
        let display_image = document.getElementById("display_image");
        let occupation = document.getElementsByName("occupation");
        let city = document.getElementById("city");
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