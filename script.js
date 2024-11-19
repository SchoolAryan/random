// script.js
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    // Dictionary-related questions
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
    },
    {
        question: "How can you check if a key exists in a Python dictionary?",
        options: ["key in d", "key.exists()", "d.contains(key)", "key.search(d)"],
        correct: "a"
    },
    {
        question: "Which method removes all items from a dictionary?",
        options: ["clear()", "delete()", "empty()", "remove()"],
        correct: "a"
    },
    {
        question: "What will the following code output? d = {'a': 1, 'b': 2}; print(d['c'])",
        options: ["None", "KeyError", "0", "False"],
        correct: "b"
    },

    // List-related questions
    {
        question: "How do you add an item to the end of a list?",
        options: ["append()", "insert()", "add()", "push()"],
        correct: "a"
    },
    {
        question: "Which method removes the last item from a list?",
        options: ["pop()", "remove()", "del", "clear()"],
        correct: "a"
    },
    {
        question: "What does the extend() method do for lists?",
        options: ["Adds elements of an iterable to the end of the list", "Removes elements from the list", "Reverses the list", "Sorts the list"],
        correct: "a"
    },
    {
        question: "How do you create an empty list in Python?",
        options: ["[]", "list()", "{}", "set()"],
        correct: "a"
    },
    {
        question: "Which method would you use to remove a specific element by value from a list?",
        options: ["remove()", "pop()", "del", "clear()"],
        correct: "a"
    },
    {
        question: "What does the 'len()' function do for a list?",
        options: ["Returns the length of the list", "Returns the last element of the list", "Checks if the list is empty", "Adds an element to the list"],
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
