let booksData = [];
let inputs = document.getElementsByClassName("input-data");
let inputData = [];
let result = "";

let example1 = new Book([3524, "HarryPorter", 2000, 6]);
let example2 = new Book([3434, "Iron Man", 1999, 1]);
let example3 = new Book([3545, "Captain Jack", 1865, 0]);
booksData = [example1, example2, example3];

display();

function addNewBook() {
    if (validate()) {
        inputData = [];
        for (let i = 0; i < inputs.length; i++) {
            inputData.push(inputs[i].value)
            inputs[i].value = "";
        }
        booksData.push(new Book(inputData));
        alert(`Bạn đã thêm sách thành công!`)
        display();
    } else {
        alert("Bạn chưa nhập đúng dữ liệu")
    }
    console.log(inputData);
    console.log(booksData);

}

function display() {
    result = `  <tr>
                <th>Mã số sách</th>
                <th>Tên sách</th>
                <th>Năm xuất bản</th>
                <th>Số quyển</th>
                <th>Tình trạng</th>
               </tr>`;
    for (const i in booksData) {
        booksData[i].setStatus();
        result += `<tr>
                <td>${booksData[i].id}</td>
                <td>${booksData[i].name}</td>
                <td>${booksData[i].publishYear}</td>
                <td>${booksData[i].quantity}</td>
                <td>${booksData[i].status}</td>
                </tr>
        `
    }
    document.getElementById("table").innerHTML = result;
}


function addOldBook() {

    let idOldBook = +prompt("Nhập id sách cần thêm:")


    for (const i in booksData) {
        if (idOldBook === booksData[i].id) {
            let quantity = +prompt("Nhập số lượng sách cần thêm:")
            if (!isNaN(quantity) && quantity !== 0) {
                booksData[i].quantity += quantity;
                display();
            }

        }
    }

}

function borrow() {
    let borrowBook = +prompt("Nhập id sách cần mượn:")


    for (const i in booksData) {
        if (borrowBook === booksData[i].id) {
            let quantity = +prompt("Nhập số lượng sách cần mượn")
            if (!isNaN(quantity) && quantity !== 0) {
                if ((booksData[i].quantity - quantity) < 0) {
                    alert("Số sách mượn lớn hơn số sách đang có");
                    return;
                }
                booksData[i].quantity -= quantity;
                display();
            }

        }
    }

}

function showMaxQuantity() {
    let max = booksData[0].quantity;
    let index = 0;
    for (const i in booksData) {
        if (max < booksData[i].quantity) {
            max = booksData[i].quantity
            index = i;
        }
    }

    alert(`Sách ${booksData[index].name} có số lượng nhiều nhất: ${max} quyển`);
}


function validate() {

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            return false;
        }

    }
    // validate id, yêu cầu là số
    if (isNaN(+inputs[0].value)) {
        return false;
    }
    // validate năm, yêu cầu là số và nhỏ hơn 4
    if (isNaN(+inputs[2].value) && inputs[2].length > 4) {
        return false;
    }
    // validate số lượng, yêu cầu là số
    if (isNaN(+inputs[3].value)) {
        return false;
    }
    return true;
}