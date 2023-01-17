
let quesTitleEl = document.getElementById("question-title");
let choiceEl = document.querySelector(".choices");




let q1 = {question: "First question _____ ", answers:["q1","q2","q3","q4"], correctAns: 2};
let q2 = {question: "Second question _____", answers:["q1","q2","q3","q4"], correctAns: 2};
let q3 = {question: "Third question ______", answers:["q1","q2","q3","q4"], correctAns: 2}
let q4 = {question: "Fourth question______", answers:["q1","q2","q3","q4"], correctAns: 2}
let q5 = {question: "Fifth question _____", answers:["q1","q2","q3","q4"], correctAns: 2}
let q6 = {question: "Sixth question ______", answers:["q1","q2","q3","q4"], correctAns: 2}
let q7 = {question: "Seventh question _____", answers:["q1","q2","q3","q4"], correctAns: 2}
let q8 = {question: "Eight question ______", answers:["q1","q2","q3","q4"], correctAns: 2}
let q9 = {question: "Nineth question ______", answers:["q1","q2","q3","q4"], correctAns: 2};
//let questions = {question1: q1,question2: q2,question3: q3,question4: q4,question5: q5,question6: q6,question7: q7,question8: q8,question9: q9,}
let questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9]

let currentQuestion = 0;

function loop(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        return element;
    }
}

function qa(){

    for (let i = 0; i < questions.length; i++){

    quesTitleEl.innerHTML = questions[i].question;
    }
       
      

    let tag = document.createElement("button")
    tag.textContent = questions[1].answers[1]
    document.children[0].children[1].children[2].children[1].children[1].appendChild(tag);
    
    let newDiv = document.createElement("div")
    newDiv.innerHTML = tag;
    document.children[0].children[1].children[2].children[1].appendChild(newDiv);

}
