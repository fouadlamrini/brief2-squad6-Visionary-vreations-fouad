
// document.getElementById("switch").addEventListener("change", theme);

function theme(){
    const label = document.querySelector('label[for="switch"]');
    const body = document.getElementById('body');
    const header = document.getElementById('header');
    const svgdiv = document.getElementById("svgdiv");
    const logoSrc = document.getElementById('logo');
    if (checkbox.checked) {
        body.classList.add('bg-[#141004]');

        header.classList.remove('bg-[#143095]'); 
        header.classList.add('bg-[#5f4e0c]'); 

        label.classList.remove('bg-[#D49286]');
        label.classList.add('bg-yellow-400'); 

        svgdiv.classList.remove('text-[#D49286]');
        svgdiv.classList.add('text-yellow-400'); 
        logoSrc.src = "images/logoYellow-re.png";

    } else {
        body.classList.remove('bg-[#141004]');

        header.classList.remove('bg-[#5f4e0c]'); 
        header.classList.add('bg-[#143095]'); 

        label.classList.remove('bg-yellow-400');
        label.classList.add('bg-[#D49286]'); 
        svgdiv.classList.remove('text-yellow-400'); 
        svgdiv.classList.add('text-[#D49286]');
        logoSrc.src = "images/logoIns-re.png";

    }
}




// ================================================
// ================================================
// ================================================

// function timer() {
//             let timeLeft = 20;
//             const countdown = document.getElementById("countdown");
//         const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
//         const seconds = String(timeLeft % 60).padStart(2, '0');
//         countdown.value = `${minutes}:${seconds}`;
        
//         timeLeft--; 

//         if (timeLeft <= 0) {
//             clearInterval(timer); 
//             countdown.value = "00:00";
//         }
//     }
// const timer = setInterval(timer, 1000);
// =============================================
// =============================================
// =============================================

const questionsObjet = [
    { 
        question: "Quel mot complète la phrase suivante : 'Il est important de ____ pour rester en bonne santé.'", 
        title: "Grammaire et Lexique",
        options: ["manger", "jouer", "dormir", "courir"], 
        answer: "dormir" 
    },
    { 
        question: "Choisissez le synonyme de 'joyeux'.", 
        title: "Lexique",
        options: ["triste", "content", "furieux", "jaloux"], 
        answer: "content" 
    },
    { 
        question: "Complétez avec la bonne préposition : 'Je vais ____ école en voiture.'", 
        title: "Grammaire",
        options: ["au", "à l'", "à la", "dans l'"], 
        answer: "à l'" 
    },
    { 
        question: "Quel mot est l’intrus ?", 
        title: "Vocabulaire",
        options: ["pomme", "orange", "raisin", "chaise"], 
        answer: "chaise" 
    },
    { 
        question: "Comment conjuguer correctement le verbe dans la phrase : 'Nous ____ au cinéma hier soir.'", 
        title: "Conjugaison",
        options: ["allons", "irions", "sommes allés", "irons"], 
        answer: "sommes allés" 
    },
    { 
        question: "Quelle est la bonne orthographe ?", 
        title: "Orthographe",
        options: ["apparament", "apparemment", "aparrement", "apperemment"], 
        answer: "apparemment" 
    },
    { 
        question: "Quel pronom convient dans cette phrase : '____ avons fini notre travail.'", 
        title: "Grammaire",
        options: ["Vous", "Ils", "Nous", "Elles"], 
        answer: "Nous" 
    },
    { 
        question: "Complétez avec le mot qui convient : 'Elle a acheté un cadeau ____ son frère.'", 
        title: "Grammaire",
        options: ["pour", "à", "avec", "chez"], 
        answer: "pour" 
    },
    { 
        question: "Quel est l’antonyme de 'clair' ?", 
        title: "Lexique",
        options: ["léger", "sombre", "lumineux", "chaud"], 
        answer: "sombre" 
    },
    { 
        question: "Complétez avec le verbe correct : 'Les enfants ____ dans le parc tous les jours.'", 
        title: "Conjugaison",
        options: ["joue", "jouons", "jouent", "jouer"], 
        answer: "jouent" 
    }
];



function shuffle(arr) {
    const num = 5;
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < num; j++) {
            const rand = Math.floor(Math.random() * arr.length);
            var temp = arr[i];
            arr[i] = arr[rand];
            arr[rand] = temp;
        }
    }
    return arr;
}


let userscore = 0 ;


function startQuiz() {
    for(let i = 0 ; i < questionsObjet.length ; i++) {
        localStorage.removeItem(`question${i}`);
    }
    userscore = 0
    const userSection = document.getElementById("userSection");
    userSection.classList.add("hidden");
    const scoreSection = document.getElementById("scoreSection");
    scoreSection.classList.add("hidden");

    const shuffledQuestions = shuffle(questionsObjet);
    const quizContainer = document.getElementById("quiz");

    localStorage.setItem(`score`,userscore); 



    quizContainer.innerHTML = "";

    shuffledQuestions.forEach((q, index) => {

        const questionOptions = document.createElement("div");
        questionOptions.classList.add("Questions" , "flex", "absolute", "top-1/3", "w-full");

        const questionElement = document.createElement("div");
        questionElement.classList.add("px-16", "w-full");

        const titleContainer =  document.createElement("div");
        titleContainer.classList.add("h-32");
        titleContainer.innerHTML = `<h1 class="text-[#D49286] text-5xl font-bold">${q.title}</h1>`
        questionElement.appendChild(titleContainer);

        const questionContainer = document.createElement("div");
        
        questionContainer.innerHTML = `
        <div class="flex justify-between items-center h-16 ">
            <h2 class="text-[#D49286] text-xl" >Question ${index+1} of ${questionsObjet.length}</h2>
            <input type="time" class="bg-transparent countdown">
        </div>
        <p class="text-2xl font-bold">
            Choisissez la bonne réponse : <br> 
            "${q.question}"
        </p>
        `;
        questionElement.appendChild(questionContainer);

        const optionsElement = document.createElement("div");
        optionsElement.classList.add("text-center", "w-full", "mt-3" ,"relative");
        optionsElement.innerHTML = `
            <button id='option0${index}' onclick="chooseOption('option0${index}','${index}','${q.options[0]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>A.<span class='OptionValue'>${q.options[0]}</span></nav></button>
            <button id='option1${index}' onclick="chooseOption('option1${index}','${index}','${q.options[1]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>B.<span class='OptionValue'>${q.options[1]}</span></nav></button>
            <button id='option2${index}' onclick="chooseOption('option2${index}','${index}','${q.options[2]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>C.<span class='OptionValue'>${q.options[2]}</span></nav></button>
            <button id='option3${index}' onclick="chooseOption('option3${index}','${index}','${q.options[3]}')" class="flex justify-between items-center answer-button border-2 border-[#D49286] h-12 w-4/5 rounded-lg text-left font-bold text-base px-5 mb-5" ><nav>D.<span class='OptionValue'>${q.options[3]}</span></nav></button>
            <button id="submitAnswer${index}" onclick="ButtonNextQuestion('${index}')" class="Submit border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20" >Submit Answer</button>
            <button id="nextQuestion${index}" onclick="displayQuestion()" class="border-2 border-[#D49286] h-12 w-3/5 rounded-3xl mb-5 text-white font-semibold text-lg bg-[#D49286] absolute left-[5rem] -bottom-20 hidden" >Next Question</button>
        `;

        questionOptions.appendChild(questionElement);
        questionOptions.appendChild(optionsElement);
        quizContainer.appendChild(questionOptions);
        
    });
    displayQuestion()
}



function ButtonNextQuestion(i, isTimer = false){
    const buttons = document.getElementsByClassName('answer-button');
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
        buttons[j].classList.add("cursor-not-allowed");

    }
    const qChoose = localStorage.getItem(`question${i}`);
    console.log(qChoose);//text
    
    const qOption = localStorage.getItem(`option${i}_Id`); 
    console.log(qOption);//id
    

    const submitAnswer = document.getElementById(`submitAnswer${i}`);    
    const nextQuestion = document.getElementById(`nextQuestion${i}`);
    
    submitAnswer.classList.add("hidden");
    nextQuestion.classList.remove("hidden");
    
    const qAnswer = questionsObjet[i].answer;
    const questionContent = questionsObjet[i].question;

    console.log(qAnswer);// text of correct answer
    
    localStorage.setItem(`Corret_Answer${i}`,qAnswer);
    localStorage.setItem(`Question_Content${i}`,questionContent);

    const id = document.getElementById(qOption);
    
    if (qChoose === qAnswer) {
        if (!id.innerHTML.includes('✅')) {
            id.innerHTML += `<span>✅</span>`;
        }
        // id.innerHTML += `<span>✅</span>`;
        id.classList.remove("border-blue-500");
        id.classList.add("border-green-500");
        userscore += 1;
        localStorage.setItem(`score`,userscore); 

    } 
    else {
        const allOptionValue = document.getElementsByClassName("OptionValue");


        for(let k = 0; k < allOptionValue.length; k++){
            if(allOptionValue[k].textContent === qAnswer){
                const option = allOptionValue[k].parentElement;
                const correctOption = option.parentElement;
                correctOption.classList.remove("border-[#D49286]");
                correctOption.classList.add("border-green-500");
                // correctOption.innerHTML += `<span>✅</span>`;
                if (!correctOption.innerHTML.includes('✅')) { 
                    correctOption.innerHTML += `<span>✅</span>`;
                }
            }
        }

        if (isTimer) {
            
            id.classList.remove("border-red-500");
            id.classList.add("border-[#D49286]-500");
        }
        else{
            id.innerHTML += `<span>❌</span>`;
            id.classList.remove("border-blue-500");
            id.classList.add("border-red-500");
        }

    }
    
}



let c = 0;
function displayQuestion() {
    const submitAnswer = document.getElementsByClassName('Submit');
    for (let j = 0; j < submitAnswer.length; j++) {
        submitAnswer[j].disabled = true;
        submitAnswer[j].classList.add("cursor-not-allowed");
    }
    const buttons = document.getElementsByClassName('answer-button');
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = false;
        buttons[j].classList.remove("cursor-not-allowed");


    }



    const question = document.getElementsByClassName("Questions");
    
    if (c < questionsObjet.length) {
        Array.from(question).forEach((question) => {
            question.classList.add("hidden");
        });
        question[c].classList.remove("hidden");
        // startTimer(c);  
        c++;
    } else {
        c = 0 ;
        Array.from(question).forEach((question) => {
            question.classList.add("hidden");
        });
        
        const scoreSection = document.getElementById("scoreSection");
        scoreSection.classList.remove("hidden");
        const scoreTitle = document.getElementById("scoreResult");

		const score = localStorage.getItem("score");
		scoreTitle.innerHTML = `${score}`;
        seeResult();

    }
}




function chooseOption(optionId,index, optionValue) {

    localStorage.setItem(`question${index}`, optionValue);
    localStorage.setItem(`option${index}_Id`, optionId);

    const submitAnswer = document.getElementsByClassName('Submit');
    for (let j = 0; j < submitAnswer.length; j++) {
        submitAnswer[j].disabled = false;
        submitAnswer[j].classList.remove("cursor-not-allowed");

    }
    const allButtonOptions = document.getElementsByClassName('answer-button');
    for (let i = 0; i < allButtonOptions.length; i++) {
        allButtonOptions[i].classList.remove("border-blue-500");
        allButtonOptions[i].classList.add("border-[#D49286]");
    }
    
    const chooseStyle = document.getElementById(optionId);
    chooseStyle.classList.remove("border-[#D49286]");
    chooseStyle.classList.add("border-blue-500");
}




function seeResult(){

    const userSection = document.getElementById("userSection");
    userSection.classList.add("hidden");
    
    const scoreSection = document.getElementById("scoreSection");
    scoreSection.classList.remove("hidden");

    const scoreTitle = document.getElementById("scoreResult");

    const score = localStorage.getItem("score");
    scoreTitle.innerHTML = `${score}`;

    const level = document.getElementById('level');
    if(score <= 2){
        level.innerHTML = "A1";
    }
    else if(score > 2 && score <= 5){
        level.innerHTML = "A2";
    }
    else if(score >= 6 && score < 8){
        level.innerHTML = "B1";
    }
    else if(score === 8){
        level.innerHTML = "B2";
    }
    else if(score === 9){
        level.innerHTML = "C1";
    }
    else {
        level.innerHTML = "C2";
    }

}





function userName(){
    const adminUsername = "admin@DFI.com";
    const adminPassword = "admin123";
    const userName = document.getElementById('userName');
    const password = document.getElementById("password").value;
    if (userName.value !== "") {
        const homeSection = document.getElementById('homeSection');
        homeSection.classList.add("hidden");
        const userSection = document.getElementById("userSection");
        userSection.classList.remove("hidden");
        const oldData = localStorage.getItem("userName");
        const oldscore = document.getElementById("oldscore");

        if (userName.value === adminUsername && password === adminPassword) {
            window.location.href = "admin.html";
        } else if (oldData === userName.value) {
            oldscore.classList.remove("hidden");
            const spanName = document.getElementById("theUserName");
            spanName.innerHTML = userName.value;
        } else {
            oldscore.classList.add("hidden");
        }

        localStorage.setItem("userName", userName.value);
    } else {
        alert("Enter your Name");
    }
}

function ResultRapport() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    let pdfContent = "";

   
   

    for (let i = 0; i < questionsObjet.length; i++) {
        const userAnswer = localStorage.getItem(`question${i}`);
        const content = localStorage.getItem(`Question_Content${i}`);
        const correctAnswer = localStorage.getItem(`Corret_Answer${i}`);
        pdfContent += `${i + 1}. ${content}\nVotre réponse : ${userAnswer}\nRéponse correcte : ${correctAnswer}\n\n`;
    }

    pdf.text(pdfContent, 10, 10);
    pdf.save("Rapport_Quiz.pdf");
}





function ResultRapport() {

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    let pdfContent = "";

    for (let i = 0; i < questionsObjet.length; i++) {
        const userAnswer = localStorage.getItem(`question${i}`);
        const content = localStorage.getItem(`Question_Content${i}`);
        const correctAnswer = localStorage.getItem(`Corret_Answer${i}`);
        pdfContent += `${i + 1}. ${content}\nVotre réponse : ${userAnswer}\nRéponse correcte : ${correctAnswer}\n\n`;
    }

    pdf.text(pdfContent, 10, 10);
    pdf.save("Rapport_Quiz.pdf");
}





// let timerInterval;
// function startTimer(i) {
//     let timeLeft = 5;
//     const countdown = document.getElementsByClassName("countdown");

//     function updateTimer() {
//         const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
//         const seconds = String(timeLeft % 60).padStart(2, '0');
//         for(let i = 0 ; i < countdown.length ; i++){
//             countdown[i].value = `${minutes}:${seconds}`;
//         }
        
//         timeLeft--; 

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval); 
//             for(let i = 0 ; i < countdown.length ; i++){
//                 countdown[i].value = "00:00";
//             }
//             ButtonNextQuestion(i,true);
//         }
//     }
//     clearInterval(timerInterval); 
//     updateTimer();
//     const timerInterval = setInterval(updateTimer, 1000);
// }


  //------timer

let timerInterval;

function startTimer(i) {
    let timeLeft = 20; // Set the time for each question
    const countdown = document.getElementsByClassName("countdown");

    function updateTimer() {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        for(let i = 0; i < countdown.length; i++){
            countdown[i].value = `${minutes}:${seconds}`;
        }
        
        timeLeft--; 

        if (timeLeft < 0) {
            clearInterval(timerInterval); 
            for(let i = 0; i < countdown.length; i++){
                countdown[i].value = "00:00";
            }
            ButtonNextQuestion(i, true); // Call the function to handle time up
        }
    }
    
    clearInterval(timerInterval); 
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function displayQuestion() {
    const submitAnswer = document.getElementsByClassName('Submit');
    for (let j = 0; j < submitAnswer.length; j++) {
        submitAnswer[j].disabled = true;
        submitAnswer[j].classList.add("cursor-not-allowed");
    }
    const buttons = document.getElementsByClassName('answer-button');
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = false;
        buttons[j].classList.remove("cursor-not-allowed");
    }

    const question = document.getElementsByClassName("Questions");
    
    if (c < questionsObjet.length) {
        Array.from(question).forEach((question) => {
            question.classList.add("hidden");
        });
        question[c].classList.remove("hidden");
        startTimer(c);  // Start the timer for the current question
        c++;
    } else {
        c = 0;
        Array.from(question).forEach((question) => {
            question.classList.add("hidden");
        });
        
        const scoreSection = document.getElementById("scoreSection");
        scoreSection.classList.remove("hidden");
        const scoreTitle = document.getElementById("scoreResult");

        const score = localStorage.getItem("score");
        scoreTitle.innerHTML = `${score}`;
        seeResult();
    }
}


// darck mode

// document.getElementById("switch").addEventListener("change", function() {
//     const body = document.getElementById("body");
//     if (this.checked) {
//         body.classList.remove("light-mode");
//         body.classList.add("dark-mode");
//     } else {
//         body.classList.remove("dark-mode");
//         body.classList.add("light-mode");
//     }
// });


// filtrage par level et categorie: fouad


document.getElementById("level-filter").addEventListener("change", filterContent);
document.getElementById("category-filter").addEventListener("change", filterContent);

function filterContent() {
    const selectedLevel = document.getElementById("level-filter").value;
    const selectedCategory = document.getElementById("category-filter").value;
    const levels = document.querySelectorAll(" .level");

    levels.forEach(level => {
        const levelMatch = selectedLevel === "all" || level.getAttribute("data-level") === selectedLevel;
        
       
        if (levelMatch && (selectedCategory === "all" || level.querySelector(`button[data-category="${selectedCategory}"]`))) {
            level.style.display = "block";  

            
            level.querySelectorAll("button").forEach(button => {
                if (selectedCategory === "all" || button.getAttribute("data-category") === selectedCategory) {
                    button.style.display = "block";  
                } else {
                    button.style.display = "none";  
                }
            });
        } else {
            level.style.display = "none";  
        }
    });
}



// script.js

function logout() {
    // Clear user session data (if applicable)
    // For example, if you are using localStorage to store user info:
    localStorage.removeItem('user'); // Adjust the key as necessary

    // Optionally, you can also clear cookies or session storage if used
    // sessionStorage.clear(); // Uncomment if you want to clear session storage

    // Redirect to the login page or home page after logout
    window.location.href = 'login.html'; // Change 'login.html' to your login page URL
}



























