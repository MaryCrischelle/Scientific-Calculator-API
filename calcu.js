const display = document.getElementById("display");

    function append(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        let expression = display.value;

        expression = expression.replace(/sin\(/g, "Math.sin(");
        expression = expression.replace(/cos\(/g, "Math.cos(");
        expression = expression.replace(/tan\(/g, "Math.tan(");
        expression = expression.replace(/log\(/g, "Math.log10(");
        expression = expression.replace(/ln\(/g, "Math.log(");
        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
        expression = expression.replace(/pi/g, "Math.PI");
        expression = expression.replace(/e/g, "Math.E");
        expression = expression.replace(/\^/g, "**");

        try {
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (!isNaN(key) || "+-*/().".includes(key)) {
            append(key);
        }

        if (key === "Enter") calculate();
        if (key === "Backspace") deleteLast();
        if (key === "Escape") clearDisplay();
    });