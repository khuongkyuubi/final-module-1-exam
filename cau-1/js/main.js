let arr = new Array();
let inputNum = document.getElementById("number");
let count = 0;
let sumOdd = 0;
let lengthOdd = 0;

function addNumber() {
    if (count === 50) {
        alert("Mảng chỉ chứa tối đa 50 phần tử");
        return;
    }
    // console.log(typeof (inputNum.value))
    if (!isNaN(inputNum.value) && inputNum.value !== "") {
        arr.push(+inputNum.value);
        inputNum.value = "";
        count++;
    }
    console.log(arr.length);
    document.getElementById("display-arr").innerText = `Mảng [${arr}] `
}

function calcAve() {
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0 && arr[i] % 2 !== 0) {
            sumOdd += arr[i];
            lengthOdd++;
        }
    }
    document.getElementById("result").innerText = `Trung bình cộng của các số lẻ trong mảng [${arr}] là : ${(sumOdd / lengthOdd)}`
}