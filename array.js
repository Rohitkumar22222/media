
let dataset = [];

function addValue() {
    let input = document.getElementById("numberInput").value;
    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Invalid number, Try again!");
        return;
    }

    dataset.push(number);
    updateDisplay();
}

function removeValue() {
    let input = document.getElementById("numberInput").value;
    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Invalid number, Try again!.");
        return;
    }

    let index = dataset.indexOf(number);
    if (index === -1) {
        alert("Number not found in dataset.");
        return;
    }

    dataset.splice(index, 1);
    updateDisplay();
}

function calculateMean() {
    if (dataset.length === 0) {
        return "N/A";
    }

    let sum = 0;
    for (let i = 0; i < dataset.length; i++) {
        sum += dataset[i];
    }

    return (sum / dataset.length).toFixed(2);
}

function updateDisplay() {
    document.getElementById("dataset").innerText = `Dataset: [${dataset.join(", ")}]`;
    document.getElementById("mean").innerText = calculateMean();
}
