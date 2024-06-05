const questions = [
    {
        "question": "Which statement do you relate to more?",
        "options": {
            "A": { 
                "desc": "“Whatever that keeps the peace of the group man”",
                "matches": ["ESFJ", "ISFJ", "ENFJ", "ENFJ", "ESTP", "ISTP", "ENTP", "INTP"]
            },
            "B": { 
                "desc": "“Peace begins with yourself. How am I supposed to help others without caring for my own well-being first?”",
                "matches": ["ESTJ", "ISTJ", "ENFP", "INFP", "ESFP", "ISFP", "ENTJ", "INTJ"]
            }
        }
    },
    {
        "question": "When faced with a new environment, how would you react?",
        "options": {
            "A": { 
                "desc": "Find familiarity in my past experiences and adapt accordingly to what has been tried and tested before.",
                "matches": ["ESFJ", "ISFJ", "ESTJ", "ISTJ", "ENFP", "INFP", "ENTP", "INTP"]
            },
            "B": { 
                "desc": "Hmm I will just see how this goes and adapt accordingly.",
                "matches": ["ENFJ", "INFJ", "ESFP", "ISFP", "ESTP", "ISTP", "ENTJ", "INTJ"]
            }
        }
    },
    {
        "question": "After eating at a restaurant, you felt that the food was awesome. However, upon searching the reviews, it only had a 2.9 stars rating. How would you react?",
        "options": {
            "A": { 
                "desc": "Oh did I order something wrong? Maybe the food wasn’t as good as I thought?",
                "matches": ["ESTJ", "ISTJ", "ENFP", "INFP", "ESFP", "ISFP", "ENTJ", "INTJ"]
            },
            "B": { 
                "desc": "Weird, the food was great though.",
                "matches": ["ESFJ", "ISFJ", "ENFJ", "ENFJ", "ESTP", "ISTP", "ENTP", "INTP"]
            }
        }
    },
    {
        "question": "Which statement do you relate to more?",
        "options": {
            "A": { 
                "desc": "I take information that I have gathered through my experiences and come up with a lot of different possibilities (e.g. brainstorming)",
                "matches": ["ESFJ", "ISFJ", "ESTJ", "ISTJ", "ENFP", "INFP", "ENTP", "INTP"]
            },
            "B": { 
                "desc": "I like to narrow down the observations I have gathered at the current moment to some kind of interpretation.",
                "matches": ["ENFJ", "INFJ", "ESFP", "ISFP", "ESTP", "ISTP", "ENTJ", "INTJ"]
            }
        }
    },
    {
        "question": "Do you recharge by spending time alone or being around people?",
        "options": {
            "A": { 
                "desc": "Alone (I)",
                "matches": ["ISTJ", "ISTP", "ISFJ", "ISFP", "INTJ", "INTP", "INFJ", "INFP"]
            },
            "B": { 
                "desc": "Being around people (E)",
                "matches": ["ESTJ", "ESTP", "ESFJ", "ESFP", "ENTJ", "ENTP", "ENFJ", "ENFP"]
            }
        }
    },
    {
        "question": "Do you prefer conversations that explore abstract ideas and one’s imagination or ones that focus on concrete and realistic topics?",
        "options": {
            "A": { 
                "desc": "Abstract ideas (N)",
                "matches": ["ENTJ", "ENTP", "ENFJ", "ENFP", "INTJ", "INTP", "INFJ", "INFP"]
            },
            "B": { 
                "desc": "Concrete, realistic topics (S)",
                "matches": ["ESTJ", "ESTP", "ESFJ", "ESFP", "ISTJ", "ISTP", "ISFJ", "ISFP"]
            }
        }
    },
    {
        "question": "There’s an upcoming trip! Do you prefer to at least have some sort of a plan or let’s just wing it?",
        "options": {
            "A": { 
                "desc": "Planning ahead (J)",
                "matches": ["ESTJ", "ESFJ", "ENTJ", "ENFJ", "ISTJ", "ISFJ", "INTJ", "INFJ"]
            },
            "B": { 
                "desc": "Spontaneity (P)",
                "matches": ["ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INTP", "INFP"]
            }
        }
    },
    {
        "question": "When making decisions, do you rely more on logic or feelings?",
        "options": {
            "A": { 
                "desc": "Logic (T)",
                "matches": ["ESTJ", "ESTP", "ENTJ", "ENTP", "ISTJ", "ISTP", "INTJ", "INTP"]
            },
            "B": { 
                "desc": "Feelings (F)",
                "matches": ["ESFJ", "ESFP", "ENFJ", "ENFP", "ISFJ", "ISFP", "INFJ", "INFP"]
            }
        }
    }
];

const personalities = [
    {
      "mbti": "ISTJ",
      "image": "penguin_istj.jpg",
      "traits": ["very good memory", "cite your sources but trusts gossips", "skeptical of new people", "follow the rule"],
      "compatible": ["ESTP", "ISTP"],
      "notCompatible": ["ENFP", "INFP"]
    },
    {
      "mbti": "ESTJ",
      "image": "penguin_estj.jpg",
      "traits": ["very loyal", "straight-forward", "quick-to-anger", "ambitious and hardworking"],
      "compatible": ["ISTP", "ESTP"],
      "notCompatible": ["INFP", "ENFP"]
    },
    {
      "mbti": "ISFJ",
      "image": "penguin_isfj.jpg",
      "traits": ["thoughtful and empathetic", "remembers the little details", "behind-the-scene doers", "reliable"],
      "compatible": ["ESFP", "ISFP"],
      "notCompatible": ["ENTP", "INTP"]
    },
    {
      "mbti": "ESFJ",
      "image": "penguin_esfj.jpg",
      "traits": ["high loyalty", "seeing someone feels better makes them happy", "always remember the little guy", "light-hearted and appreciate simple things"],
      "compatible": ["ISFP", "ESFP"],
      "notCompatible": ["INTP", "ENTP"]
    },
    {
      "mbti": "ESTP",
      "image": "penguin_estp.jpg",
      "traits": ["afraid of being alone", "work hard play hard", "live in the moment and very observant", "very sociable"],
      "compatible": ["ISTJ", "ESTJ"],
      "notCompatible": ["INFJ", "ENFJ"]
    },
    {
      "mbti": "ISTP",
      "image": "penguin_istp.jpg",
      "traits": ["straightforward until they hurt someone's feelings", "listens more and talks less", "bad at sticking to really detailed plans", "really good at hands-on work"],
      "compatible": ["ESTJ", "ISTJ"],
      "notCompatible": ["ENFJ", "INFJ"]
    },
    {
      "mbti": "ESFP",
      "image": "penguin_esfp.jpg",
      "traits": ["spontaneous but detail-oriented", "loves sensory experiences (e.g. lights and sounds)", "warm and understanding", "figure things out as they go"],
      "compatible": ["ISFJ", "ESFJ"],
      "notCompatible": ["INTJ", "ENTJ"]
    },
    {
      "mbti": "ISFP",
      "image": "penguin_isfp.jpg",
      "traits": ["emotionally intense but quiet about it", "put a lot of thought into everything", "observant of body language cues", "go with the flow but also individualistic"],
      "compatible": ["ESFJ", "ISFJ"],
      "notCompatible": ["ENTJ", "INTJ"]
    },
    {
      "mbti": "ENTJ",
      "image": "penguin_entj.jpg",
      "traits": ["has entire life planned out", "high confidence", "no nonsense", "never ending hustle"],
      "compatible": ["INTP", "ENTP"],
      "notCompatible": ["ISFP", "ESFP"]
    },
    {
      "mbti": "INTJ",
      "image": "penguin_intj.jpg",
      "traits": ["frustrated at others incompetence", "understand concepts easily", "could not care less about social norms", "very stubborn"],
      "compatible": ["ENTP", "INTP"],
      "notCompatible": ["ESFP", "ISFP"]
    },
    {
      "mbti": "INTP",
      "image": "penguin_intp.jpg",
      "traits": ["short sentences or full-on literature essay", "sudden burst of productivity", "like to play “devil's advocate”", "awkward"],
      "compatible": ["ENTJ", "INTJ"],
      "notCompatible": ["ESFJ", "ISFJ"]
    },
    {
      "mbti": "ENTP",
      "image": "penguin_entp.jpg",
      "traits": ["thirst for knowledge", "the more changes the better", "non-judgemental", "might seem introverted"],
      "compatible": ["INTJ", "ENTJ"],
      "notCompatible": ["ISFJ", "ESFJ"]
    },
    {
      "mbti": "ENFJ",
      "image": "penguin_enfj.jpg",
      "traits": ["extremely charismatic", "blend in to any social group", "try to get everyone to participate", "always listening and helping"],
      "compatible": ["INFP", "ENFP"],
      "notCompatible": ["ISTP", "ESTP"]
    },
    {
      "mbti": "INFJ",
      "image": "penguin_infj.jpg",
      "traits": ["introspective and enjoys deep thinking", "strong empathy", "independent and creative", "door slams people after being betrayed"],
      "compatible": ["ENFP", "INFP"],
      "notCompatible": ["ESTP", "ISTP"]
    },
    {
      "mbti": "ENFP",
      "image": "penguin_enfp.jpg",
      "traits": ["massive enthusiasm with friends", "thoughts all over the place", "90+ tabs in browsers", "sometimes hesitant but never regret going to a party"],
      "compatible": ["INFJ", "ENFJ"],
      "notCompatible": ["ISTJ", "ESTJ"]
    },
    {
      "mbti": "INFP",
      "image": "penguin_infp.jpg",
      "traits": ["emotionally sensitive", "feeling misunderstood", "getting caught up in daydreams", "having a deep well of emotions that they keep to themselves"],
      "compatible": ["ENFJ", "INFJ"],
      "notCompatible": ["ESTJ", "ISTJ"]
    }
  ];
  

let currentQuestionIndex = 0;
let matches = [];

function startQuiz() {
    window.location.href = 'quiz.html';
}

function loadQuestion() {
    console.log(questions);
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById('question');
        const options = questions[currentQuestionIndex].options;

        questionElement.innerText = questions[currentQuestionIndex].question;

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
    const compatibleTypes = resultData.compatible;
    const incompatibleTypes = resultData.notCompatible;

    document.getElementById('trait1').innerText = traits[0];
    document.getElementById('trait2').innerText = traits[1];
    document.getElementById('trait3').innerText = traits[2];
    document.getElementById('trait4').innerText = traits[3];

    document.getElementById('result-image').src = "/images/" + resultData.image;

    document.getElementById('compatible1').querySelector('img').src = "/images/" + getMBTIData(compatibleTypes[0]).image;
    document.getElementById('compatible2').querySelector('img').src = "/images/" + getMBTIData(compatibleTypes[1]).image;
    document.getElementById('incompatible1').querySelector('img').src = "/images/" + getMBTIData(incompatibleTypes[0]).image;
    document.getElementById('incompatible2').querySelector('img').src = "/images/" + getMBTIData(incompatibleTypes[1]).image;

    document.getElementById('compatible1').onclick = () => redirectToType(compatibleTypes[0], false);
    document.getElementById('compatible2').onclick = () => redirectToType(compatibleTypes[1], false);
    document.getElementById('incompatible1').onclick = () => redirectToType(incompatibleTypes[0], false);
    document.getElementById('incompatible2').onclick = () => redirectToType(incompatibleTypes[1], false);

    if (isResult !== 'true') {
        document.getElementById('quiz-result-title').style.display = 'none';
    }

}

function getMBTIData(mbti) {
    return personalities.find(personality => personality.mbti === mbti);
}
    
    function restartQuiz() {
        localStorage.removeItem('quizAnswers');
        window.location.href = 'index.html';
    }
    
    function redirectToType(type, isResult) {
        window.location.href = `results.html?type=${type}&isResult=${isResult}`;
    }
    