// import questions from './models/questions.json' assert {type:'json'};
// import personalities from './models/personalities.json' assert {type:'json'};

let currentQuestionIndex = 0;
let matches = [];

function setUpHomePage(){
    document.getElementById("start-btn").onclick = () => startQuiz();
}

function startQuiz() {
    window.location.href = 'quiz.html';
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById('question');
        const questionData = questions[currentQuestionIndex]
        const options = questionData.options;
        const image = questionData.image;

        questionElement.innerText = questions[currentQuestionIndex].question;

        document.getElementById('inner-progress-bar').style.width= ((currentQuestionIndex + 1) / 8 * 100) + "%";
        document.getElementById('circle').innerText = (currentQuestionIndex+1);

        document.getElementById('question-img').src = "images/" + image;

        document.getElementById('optionA').innerText = options.A.desc;
        document.getElementById('optionB').innerText = options.B.desc;

        document.getElementById('optionA').onclick = () => selectOption('A');
        document.getElementById('optionB').onclick = () => selectOption('B');
    } else {
        showResults();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('quiz.html')) {
        loadQuestion();
    } else if (window.location.pathname.endsWith('results.html')) {
        displayResults();
    } else if (window.location.pathname.endsWith('all-penguins.html')){
        setUpAllPenguinsPage();
    }
    else {
        setUpHomePage();
    }

});

function selectOption(option) {
    matches = matches.concat(questions[currentQuestionIndex].options[option].matches);
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    // Calculate the most frequent personality types
    const result = calculateResult();
    localStorage.setItem('quizResult', JSON.stringify(result));
    window.location.href = 'results.html';
}

function calculateResult() {
    const frequency = matches.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const sortedTypes = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    return sortedTypes.slice(0, 4); // Get top 4 most frequent types
}

function displayResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const result = JSON.parse(localStorage.getItem('quizResult')) || [];
    const type = urlParams.get('type') || result[0];
    const isResult = urlParams.get('isResult') || 'true';
    
    const resultData = getMBTIData(type); // Assuming the first type is the main result

    const traits = resultData.traits;
    const name = resultData.name;
    const compatibleTypes = resultData.compatible;
    const incompatibleTypes = resultData.notCompatible;

    document.getElementById("restart-btn").onclick = () => restartQuiz();
    document.getElementById('results-btn').onclick = () => goToAllPenguinsPage();
    document.getElementById('results-img').src = "images/" + resultData.image
    

    // document.getElementById('trait1').innerText = traits[0];
    // document.getElementById('trait2').innerText = traits[1];
    // document.getElementById('trait3').innerText = traits[2];
    // document.getElementById('trait4').innerText = traits[3];

    // document.getElementById('name-container').innerText = name.toUpperCase();

    // document.getElementById('result-image').src = "images/" + resultData.image;

    // document.getElementById('compatible1').querySelector('img').src = "images/" + getMBTIData(compatibleTypes[0]).image;
    // document.getElementById('compatible2').querySelector('img').src = "images/" + getMBTIData(compatibleTypes[1]).image;
    // document.getElementById('incompatible1').querySelector('img').src = "images/" + getMBTIData(incompatibleTypes[0]).image;
    // document.getElementById('incompatible2').querySelector('img').src = "images/" + getMBTIData(incompatibleTypes[1]).image;

    // document.getElementById('compatible1').onclick = () => redirectToType(compatibleTypes[0], false);
    // document.getElementById('compatible2').onclick = () => redirectToType(compatibleTypes[1], false);
    // document.getElementById('incompatible1').onclick = () => redirectToType(incompatibleTypes[0], false);
    // document.getElementById('incompatible2').onclick = () => redirectToType(incompatibleTypes[1], false);

    // if (isResult !== 'true') {
    //     document.getElementById('results-btn').style.display = 'inline';
    //     document.getElementById('results-btn').onclick = () => backToResultPage();
    //     document.getElementById('quiz-result-title').innerText = "They are...";
    // }

}

function setUpAllPenguinsPage(){
    document.getElementById("back-btn").onclick = () => backToResultPage();
    document.getElementById("restart-btn").onclick = () => restartQuiz();
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    for (var i=1; i<17; i++){
        var img = document.getElementById("img-" + i);
        img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        }
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
}

function getMBTIData(mbti) {
    return personalities.find(personality => personality.mbti === mbti);
}
    
function restartQuiz() {
    localStorage.removeItem('quizAnswers');
    window.location.href = 'index.html';
}

function backToResultPage(){
    window.location.href = 'results.html';
}

function goToAllPenguinsPage(){
    window.location.href = 'all-penguins.html';
}

function redirectToType(type, isResult) {
    window.location.href = `results.html?type=${type}&isResult=${isResult}`;
}
    
