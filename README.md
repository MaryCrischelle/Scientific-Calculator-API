# Scientific-Calculator-API
🧮 Scientific Calculator (Web)

A fully functional Scientific Calculator built using HTML, CSS, and JavaScript.
This calculator supports basic arithmetic, scientific functions, keyboard input, and has a clean, modern UI.

🌟 Features

➕ Basic operations: + − × ÷

📐 Scientific functions:

sin, cos, tan

log (base 10)

ln (natural logarithm)

√ (square root)

x^y (power)

🔢 Mathematical constants:

π (Pi)

e (Euler’s number)

⌫ Backspace / delete

🧹 Clear all (C)

⌨️ Full keyboard support

❌ Error handling for invalid expressions

🛠️ Technologies Used

HTML5 – Calculator layout

CSS3 – Styling & responsive grid layout

JavaScript (ES6) – Calculator logic & evaluation

📂 Project Structure
scientific-calculator/
│
├── index.html     # Calculator UI
├── calcu.css      # Styles
├── calcu.js       # Calculator logic
└── README.md      # Documentation

🚀 How to Run the Project

Clone the repository

git clone https://github.com/your-username/scientific-calculator.git


Open the project folder

Open index.html in your browser

No server required

Works offline

⌨️ Keyboard Shortcuts
Key	Action
0–9	Enter numbers
+ - * /	Operators
( ) .	Parentheses & decimal
Enter	Calculate
Backspace	Delete last character
Esc	Clear display
🧠 How It Works

User input is displayed in a text field

Mathematical functions are converted to Math.* equivalents

Expressions are evaluated using JavaScript’s eval() method

Errors are caught and displayed as "Error"

🎨 UI Design

Purple background with centered calculator

Neon-style display screen

Grid-based button layout

Color-coded buttons:

🟠 Operators

🟢 Equals

🔴 Clear

⚠️ Note

This project uses eval() for expression evaluation.
It is safe for learning and personal projects, but not recommended for production environments without proper input sanitization.

📄 License

This project is open-source and free to use for educational purposes.
