let screen = document.getElementById("screen");

function press(value) {
    // Jika layar masih "0", ganti dengan angka baru
    if (screen.innerText === "0") {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function clearScreen() {
    screen.innerText = "0";
}

function delChar() {
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1);
    } else {
        screen.innerText = "0";
    }
}

function calculate() {
    try {
        let result = eval(screen.innerText);

        // Jika hasil NaN atau undefined
        if (isNaN(result) || result === undefined) {
            screen.innerText = "Error";
        } else {
            screen.innerText = result;
        }
    } catch {
        screen.innerText = "Error";
    }
}
