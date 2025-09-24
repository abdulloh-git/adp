let arr = [];

for (let i = 0; i < Infinity; i++) {
    let arrAdd = prompt("enter a command", "Add, Del, Stop")
    arrAdd = arrAdd.split(",");
    if (arrAdd[0] == "Add") {
        arr.push(arrAdd[1]);
    } else if (arrAdd[0] == "Del") {
        for (let x = 0; x < arr.length; x++) {
            arr[x] == arrAdd[1] ? arr.splice(x, 1) : "";
        }
    } else if (arrAdd[0] == "Stop") {
        alert("A list of members is lowered to the console");
        break;
    }
}
console.log(arr);