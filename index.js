// Questions du quiz
let choice = 5;
const questions = [
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All the above"],
        answer: 3,

    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0,
    },
    {
        question: "Which operator allows you to check strict equality (value and type)?",
        options: ["==", "===", "=", "!="],
        answer: 1,

    },
    {
        question: "What is an arrow function in JavaScript?",
        options: [
            "An anonymous function",
            "A function with shorthand syntax that does not have its own this",
            "A function that always returns a value",
            "A function that cannot take parameters"
        ],
        answer: 1,

    },
    {
        question: "Which method transforms a JavaScript object into a JSON string?",
        options: ["parse()", "stringify()", "toJSON()", "serialize()"],
        answer: 1,
    }
];






//__________________________________________________________________________________
const header = document.createElement("header");
document.body.appendChild(header);
const titre = document.createElement("h2");
titre.textContent = "Quiz Javascript";

header.appendChild(titre);
//Creation de la barre de progression
const progression = document.createElement("progress");
progression.classList.add("progression");

header.appendChild(progression);
//const page = document.createElement("div");





const texteApresProgression = document.createElement("div");
const score = document.createElement("p");
//score.innerHTML = "Score:";
texteApresProgression.classList.add("scoreTemps");


texteApresProgression.appendChild(score);

header.appendChild(texteApresProgression);
//-------------------fin de la barre de navigation


const main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);


// this function allows to verify if the answar is correct or not

function verify(choie){
    if(choie === questions[indice].answer){
        return true;
    }
    return false;
}



// cette fonction affiche la question en cours dans la page html
function questionEnCours(indice){
    //question
    const cQuestion = document.createElement("h3");
    cQuestion.innerText = questions[indice].question;
    main.appendChild(cQuestion);
    //choie1
    const choie1 = document.createElement("p");
    
    choie1.addEventListener("click", () => {
        choice = 0;
        choie1.style.backgroundColor = "rgb(182, 124, 124)";
        choie3.style.backgroundColor = "rgb(228, 225, 225)";
        choie2.style.backgroundColor = "rgb(228, 225, 225)";
        choie4.style.backgroundColor = "rgb(228, 225, 225)";
        
    });
    choie1.classList.add("choie");
    
    choie1.innerText = questions[indice].options[0];
    main.appendChild(choie1);
    //choie2
    const choie2 = document.createElement("p");
    
    choie2.addEventListener("click", () => {
        choice = 1;
        choie2.style.backgroundColor = "rgb(182, 124, 124)";
        choie3.style.backgroundColor = "rgb(228, 225, 225)";
        choie4.style.backgroundColor = "rgb(228, 225, 225)";
        choie1.style.backgroundColor = "rgb(228, 225, 225)";
        
    });
    choie2.classList.add("choie");
    //choice = ;
    choie2.innerText = questions[indice].options[1];
    main.appendChild(choie2);

    //choie3
    const choie3 = document.createElement("p");
    
    choie3.addEventListener("click", () => {
        choice = 2;
        choie3.style.backgroundColor = "rgb(182, 124, 124)";
        choie4.style.backgroundColor = "rgb(228, 225, 225)";
        choie2.style.backgroundColor = "rgb(228, 225, 225)";
        choie1.style.backgroundColor = "rgb(228, 225, 225)";
        
        
    });
    choie3.classList.add("choie");
    //choie3.value =
    choie3.innerText = questions[indice].options[2];
    main.appendChild(choie3);

    //choie4
    const choie4 = document.createElement("p");
    
    choie4.addEventListener("click", () => {
        choice = 3;
        choie4.style.backgroundColor = "rgb(182, 124, 124)";
        choie3.style.backgroundColor = "rgb(228, 225, 225)";
        choie2.style.backgroundColor = "rgb(228, 225, 225)";
        choie1.style.backgroundColor = "rgb(228, 225, 225)";
        
    });
    choie4.classList.add("choie");
    //choie4.value = ;
    choie4.innerText = questions[indice].options[3];
    main.appendChild(choie4);
    
    // construction des bouttons suivant et precedant

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("containerBtn");
    const bouttonSoumettre = document.createElement("input");
    bouttonSoumettre.type = "button";
    bouttonSoumettre.classList.add("btn");
    bouttonSoumettre.value = "Soumettre"
    btnContainer.appendChild(bouttonSoumettre);
    //btnContainer.appendChild(bouttonSuivant);
    main.appendChild(btnContainer);

    bouttonSoumettre.addEventListener("click", ()=>{
        if(choice===5){
            score.innerHTML = "Please make a choice:";
        }else{
            if(choice === questions[indice].answer){
                main.textContent = ""
                score.innerHTML = "Great job. Reload the page to restart";
                
            }
            else{
                score.innerHTML = "Wrong! Try again."
            }
        }
    });
    
}

function demarrage(){
    const menuDemarre = document.createDocumentFragment("div");
    
    const text = document.createElement("p");
    text.style.textAlign =  "center";
    
    text.textContent = "Click here to star the Quiz!";
    text.addEventListener("click", ()=>{
        text.remove();
        questionEnCours(Math.floor(Math.random() * 5));
        
        
    });
    menuDemarre.appendChild(text);
    main.appendChild(menuDemarre);
    
}




demarrage();
//questionEnCours(0);


