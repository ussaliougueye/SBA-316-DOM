// Questions du quiz
let choice = 5;
const questions = [
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?",
        options: ["var", "let", "const", "Toutes ces réponses"],
        answer: 3,
        explanation: "En JavaScript moderne, vous pouvez utiliser var, let ou const pour déclarer des variables, chacun avec ses particularités."
    },
    {
        question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0,
        explanation: "La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau."
    },
    {
        question: "Quel opérateur permet de vérifier l'égalité stricte (valeur et type)?",
        options: ["==", "===", "=", "!="],
        answer: 1,
        explanation: "L'opérateur === vérifie à la fois la valeur et le type, alors que == effectue une conversion de type avant la comparaison."
    },
    {
        question: "Qu'est-ce qu'une fonction fléchée (arrow function) en JavaScript?",
        options: [
            "Une fonction anonyme",
            "Une fonction avec une syntaxe raccourcie qui ne possède pas son propre this",
            "Une fonction qui retourne toujours une valeur",
            "Une fonction qui ne peut pas prendre de paramètres"
        ],
        answer: 1,
        explanation: "Les fonctions fléchées ont une syntaxe concise et n'ont pas leur propre this, arguments, super ou new.target."
    },
    {
        question: "Quelle méthode transforme un objet JavaScript en chaîne JSON?",
        options: ["parse()", "stringify()", "toJSON()", "serialize()"],
        answer: 1,
        explanation: "JSON.stringify() convertit une valeur JavaScript en chaîne JSON, tandis que JSON.parse() fait l'inverse."
    },
    {
        question: "Qu'est-ce que le 'hoisting' en JavaScript?",
        options: [
            "Le déplacement des déclarations en haut de leur scope avant l'exécution",
            "Une méthode pour optimiser les performances",
            "Un type de boucle",
            "Une fonction intégrée"
        ],
        answer: 0,
        explanation: "Le hoisting est un comportement de JavaScript où les déclarations de variables et de fonctions sont déplacées en haut de leur scope avant l'exécution du code."
    },
    {
        question: "Quelle méthode permet d'appeler une fonction après un délai spécifié?",
        options: ["setInterval()", "setTimeout()", "wait()", "delay()"],
        answer: 1,
        explanation: "setTimeout() exécute une fonction ou un morceau de code après qu'un délai spécifié se soit écoulé."
    },
    {
        question: "Qu'est-ce qu'une promesse (Promise) en JavaScript?",
        options: [
            "Un objet représentant l'achèvement ou l'échec d'une opération asynchrone",
            "Une fonction qui retourne immédiatement une valeur",
            "Une déclaration conditionnelle",
            "Un type de boucle"
        ],
        answer: 0,
        explanation: "Une Promise est un objet qui représente la complétion ou l'échec éventuel d'une opération asynchrone et sa valeur résultante."
    },
    {
        question: "Quelle méthode permet de cloner superficiellement un objet en JavaScript?",
        options: [
            "Object.clone()",
            "Object.assign()",
            "Object.copy()",
            "Object.create()"
        ],
        answer: 1,
        explanation: "Object.assign() est utilisé pour copier les valeurs de toutes les propriétés propres énumérables d'un ou plusieurs objets sources vers un objet cible."
    },
    {
        question: "Quelle méthode de tableau crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: 2,
        explanation: "map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant."
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
            score.innerHTML = "veillez faire un choix:";
        }else{
            if(choice === questions[indice].answer){
                score.innerHTML = "Vrai";
                
            }
            else{
                score.innerHTML = "Wrong! Try again."
            }
        }
    });
    
}

function demarrage(){
    const menuDemarre = document.createDocumentFragment("div");
    
    const text = document.createElement("h1");
    text.textContent = "Star the Quiz!";
    text.addEventListener("click", ()=>{
        text.remove();
        questionEnCours(Math.floor(Math.random() * 10));
        
        
    });
    menuDemarre.appendChild(text);
    main.appendChild(menuDemarre);
    
}




demarrage();
//questionEnCours(0);


