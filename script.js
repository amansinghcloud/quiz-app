const questions = [
    {
        que: "Which of the following is your subject?",
        a: "EDC",
        b: "DBMS",
        c: "OS",
        d: "OOPS",
        correct: "a"
    },
    {
        que: "Which of the following is your faculty?",
        a: "AKG",
        b: "PKS",
        c: "CS",
        d: "GSY",
        correct: "c"
    },
    {
        que: "Which of the following is your college?",
        a: "IIT",
        b: "IIIT",
        c: "NIT",
        d: "OTHER",
        correct: "b"
    },
    {
        que: "Which of the following is your department?",
        a: "ECE",
        b: "AIDE",
        c: "CSE",
        d: "MECH",
        correct: "a"
    }
];

let index = 0;
let score = 0;

const qbox = document.getElementById("qbox");
const options = document.querySelectorAll(".options");
const labels = document.querySelectorAll("label");
const btn = document.querySelector(".btn");

function loadQuestion() {
    if (index === questions.length) {
        endQuiz();
        return;
    }

    options.forEach(opt => opt.checked = false);

    const data = questions[index];
    qbox.innerText = `${index + 1}) ${data.que}`;

    labels[0].innerText = data.a;
    labels[1].innerText = data.b;
    labels[2].innerText = data.c;
    labels[3].innerText = data.d;
}

function getAnswer() {
    let answer;
    options.forEach(opt => {
        if (opt.checked) {
            answer = opt.value;
        }
    });
    return answer;
}

btn.addEventListener("click", () => {
    const ans = getAnswer();

    if (!ans) {
        alert("Please select an option!");
        return;
    }

    if (ans === questions[index].correct) {
        score++;
    }

    index++;
    loadQuestion();
});

function endQuiz() {
    document.getElementById("box").innerHTML = `
        <h2>Quiz Finished 🎉</h2>
        <h3>Your Score: ${score} / ${questions.length}</h3>
    `;
}

loadQuestion();
