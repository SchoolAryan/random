// script.js
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the method to get the value of a key in a dictionary?",
        options: ["get()", "pop()", "append()", "remove()"],
        correct: "a"
    },
    {
        question: "How do you add a key-value pair to a Python dictionary?",
        options: ["d[key] = value", "d.add(key, value)", "d.insert(key, value)", "d.put(key, value)"],
        correct: "a"
    },
    {
        question: "What does the pop() method do in a dictionary?",
        options: ["Removes a key-value pair", "Returns the entire dictionary", "Adds a new key-value pair", "Returns the first key-value pair"],
        correct: "a"
    }
];

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;

    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.innerText = questionData.options[index];
    });
}

function checkAnswer(answer) {
    const questionData = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option");

    // Disable all buttons after the user clicks an option
    buttons.forEach(button => button.disabled = true);

    // If the answer is correct, change the color of the correct answer to green
    if (answer === questionData.correct) {
        score++;  // Increase score if answer is correct
        document.getElementById("score").innerText = score;
        document.querySelector(`#${answer}`).style.backgroundColor = "green"; // Correct answer -> Green
    } else {
        // If the answer is incorrect, change the clicked answer to red
        document.querySelector(`#${answer}`).style.backgroundColor = "red"; // Incorrect answer -> Red
        // Change the correct answer to green
        document.querySelector(`#${questionData.correct}`).style.backgroundColor = "green"; // Correct answer -> Green
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();

        // Reset button styles and enable buttons for the next question
        const buttons = document.querySelectorAll(".option");
        buttons.forEach(button => {
            button.disabled = false;
            button.style.backgroundColor = "#007bff"; // Reset button color to original (blue)
        });
    } else {
        alert("You've completed the quiz! Your final score is: " + score);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        document.getElementById("score").innerText = score;
    }
}

// Initial question load
loadQuestion();
