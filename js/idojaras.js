function showtemp() {
    let temp = document.querySelector("select.chooseday").value;
    let ans = document.querySelector("h6#napifok")
    if (temp == "1") {
        ans.innerHTML = "hideg";
        console.log()
    }
}

