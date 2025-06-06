function square(num) {
    return num * num;
}

function calculateSquare() {
    const input = document.getElementById("numberInput").value;
    const num = parseFloat(input);

    if (!isNaN(num)) {
        const result = num * num;
        document.getElementById("result").innerText = `Square of ${num} is ${result}`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}