export const contquest = document.querySelector("#contquest")
export const startpad = document.querySelector("#startpad")
export const contanswer = document.querySelector("#contanswer")
export const wrong = document.querySelector("#imgwrong")
export const preventspan = document.querySelector("#preventspan")
export const arrow = document.querySelector("#arrow")
export const congratulations = document.querySelector("#congratulations")
export const end = document.querySelector("#end")
export const restart = document.querySelector("#restart")
export let answersValues = [];

export function setAnswersValues(answersValue) {
    answersValues = answersValue;
}

const linesQuest = ["linesq1", "linesq2", "linesq3", "linesq4", "linesq5", "linesq6", "linesq7", "linesq8", "linesq9", "linesq10"]
export const lines = Object.fromEntries(linesQuest.map(line => [line, document.querySelectorAll(`.${line}`)]))

const button = ["buttonq1", "buttonq2", "buttonq3", "buttonq4", "buttonq5", "buttonq6", "buttonq7", "buttonq8", "buttonq9", "buttonq10"]
export const buttonq = Object.fromEntries(button.map(button => [button, document.querySelectorAll(`.${button}`)]))

const answersq = ["answers1", "answers2", "answers3", "answers4", "answers5", "answers6", "answers7", "answers8", "answers9", "answers10"]
export const answers = Object.fromEntries(answersq.map(answer => [answer, document.getElementById(`${answer}`)]))

const answersq1 = ["answer11", "answer12", "answer13", "answer14"]
const answers1 = Object.fromEntries(answersq1.map(answerq1 => [answerq1, document.getElementById(`${answerq1}`)]))

const answersq2 = ["answer21", "answer22", "answer23", "answer24"]
const answers2 = Object.fromEntries(answersq2.map(answerq2 => [answerq2, document.getElementById(`${answerq2}`)]))

const answersq3 = ["answer31", "answer32", "answer33", "answer34"]
const answers3 = Object.fromEntries(answersq3.map(answerq3 => [answerq3, document.getElementById(`${answerq3}`)]))

const answersq4 = ["answer41", "answer42", "answer43", "answer44"]
const answers4 = Object.fromEntries(answersq4.map(answerq4 => [answerq4, document.getElementById(`${answerq4}`)]))

const answersq5 = ["answer51", "answer52", "answer53", "answer54"]
const answers5 = Object.fromEntries(answersq5.map(answerq5 => [answerq5, document.getElementById(`${answerq5}`)]))

const answersq6 = ["answer61", "answer62", "answer63", "answer64"]
const answers6 = Object.fromEntries(answersq6.map(answerq6 => [answerq6, document.getElementById(`${answerq6}`)]))

const answersq7 = ["answer71", "answer72", "answer73", "answer74"]
const answers7 = Object.fromEntries(answersq7.map(answerq7 => [answerq7, document.getElementById(`${answerq7}`)]))

const answersq8 = ["answer81", "answer82", "answer83", "answer84"]
const answers8 = Object.fromEntries(answersq8.map(answerq8 => [answerq8, document.getElementById(`${answerq8}`)]))

const answersq9 = ["answer91", "answer92", "answer93", "answer94"]
const answers9 = Object.fromEntries(answersq9.map(answerq9 => [answerq9, document.getElementById(`${answerq9}`)]))

const answersq10 = ["answer101", "answer102", "answer103", "answer104"]
const answers10 = Object.fromEntries(answersq10.map(answerq10 => [answerq10, document.getElementById(`${answerq10}`)]))

import {
    configureTypeOneQuestionTransition, 
    configureTypeTwoQuestionTransition, 
    configureTypeTwoTwoQuestionTransition, 
    configureTypeTwoOneQuestionTransition
} from "./transicoes/perguntas.js";

/* O código abaixo exporta funções com valores e tem finalidade para dizer quando as caixas de respostas estão em animação e em qual das caixas estão (index). No final ele importa as funções das setas prontas.*/

let indexImg = 0;
function setIndexImg (index) {
    indexImg = index
}

let isAnimating = false;
function setIsAnimating (isAnimat) {
    isAnimating = isAnimat
}

export {setIndexImg, indexImg, setIsAnimating, isAnimating}
import leftArrow from "./setas/esquerda.js";
import rightArrow from "./setas/direita.js";
import { forQuest1, forStart } from "./transicoes/init_rest.js"
import { forEndTypeOne } from "./transicoes/last_ask.js"
import { clickWrong } from "./respost_incorr.js"



function forQuest2() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers1.answer13,
        futureAnswers: answers2,
        nextAnswers: answers.answers2,
        currentButtons: buttonq.buttonq1,
        nextButtons: buttonq.buttonq2,
        nextLines: lines.linesq2,
        currentLines: lines.linesq1
    })
}

function forQuest3() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers2.answer24,
        futureAnswers: answers3,
        nextAnswers: answers.answers3,
        currentButtons: buttonq.buttonq2,
        nextButtons: buttonq.buttonq3,
        nextLines: lines.linesq3,
        currentLines: lines.linesq2
    })
}

function forQuest4() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers3.answer31,
        futureAnswers: answers4,
        nextAnswers: answers.answers4,
        currentButtons: buttonq.buttonq3,
        nextButtons: buttonq.buttonq4,
        nextLines: lines.linesq4,
        currentLines: lines.linesq3
    })
}

function forQuest5() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers4.answer43,
        futureAnswers: answers5,
        nextAnswers: answers.answers5,
        currentButtons: buttonq.buttonq4,
        nextButtons: buttonq.buttonq5,
        nextLines: lines.linesq5,
        currentLines: lines.linesq4
    })
}

function forQuest6() {
    return configureTypeTwoQuestionTransition({
        answerCorrect: answers5.answer52,
        futureAnswers: answers6,
        nextAnswers: answers.answers6,
        currentButtons: buttonq.buttonq5,
        nextButtons: buttonq.buttonq6,
        nextLines: lines.linesq6,
        currentLines: lines.linesq5
    }).then(() => {
        leftArrow();
        rightArrow();
    })
}

function forQuest7() {
    return configureTypeTwoTwoQuestionTransition({
        answerCorrect: answers6.answer64,
        futureAnswers: answers7,
        nextAnswers: answers.answers7,
        currentButtons: buttonq.buttonq6,
        nextButtons: buttonq.buttonq7,
        nextLines: lines.linesq7,
        currentLines: lines.linesq6
    }).then(() => {
        leftArrow();
        rightArrow();
    })
}

function forQuest8() {
    return configureTypeTwoOneQuestionTransition({
        answerCorrect: answers7.answer71,
        futureAnswers: answers8,
        nextAnswers: answers.answers8,
        currentButtons: buttonq.buttonq7,
        nextButtons: buttonq.buttonq8,
        nextLines: lines.linesq8,
        currentLines: lines.linesq7
    })
}

function forQuest9() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers8.answer81,
        futureAnswers: answers9,
        nextAnswers: answers.answers9,
        currentButtons: buttonq.buttonq8,
        nextButtons: buttonq.buttonq9,
        nextLines: lines.linesq9,
        currentLines: lines.linesq8
    })
}

function forQuest10() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers9.answer94,
        futureAnswers: answers10,
        nextAnswers: answers.answers10,
        currentButtons: buttonq.buttonq9,
        nextButtons: buttonq.buttonq10,
        nextLines: lines.linesq10,
        currentLines: lines.linesq9
    })
}

function forFinish() {
    return forEndTypeOne({
        answerCorrect: answers10.answer102,
        currentButtons: buttonq.buttonq10
    })
}


/* 
    Na função abaixo os await(s) não fazem diferença, porque são funções que adicionam eventos de clicks para os botões usando as variáveis entregues. Como os botões só aparecem para clique quando "display = block" e só um por vez tem esse valor, então é obrigatório clicar no anterior para o proximo aparecer. 
    
    Conclusão: Await na função abaixo, no atual momento não faz diferença. (23/03/2026)
*/

async function wait() {
    await forQuest1();
    await forQuest2();
    await forQuest3();
    await forQuest4();
    await forQuest5();
    await forQuest6();
    await forQuest7();
    await forQuest8();
    await forQuest9();
    await forQuest10();
    await forFinish();
    await forStart();
}

wait()

async function fixedQuest1() {
    return clickWrong({
        answers: answers1,
        answersCorrect: answer13
    })
}

async function fixedQuest2() {
    return clickWrong({
        answers: answers2,
        answersCorrect: answer24
    })
}

async function fixedQuest3() {
    return clickWrong({
        answers: answers3,
        answersCorrect: answer31
    })
}

async function fixedQuest4() {
    return clickWrong({
        answers: answers4,
        answersCorrect: answer43
    })
}

async function fixedQuest5() {
    return clickWrong({
        answers: answers5,
        answersCorrect: answer52
    })
}

async function fixedQuest6() {
    return clickWrong({
        answers: answers6,
        answersCorrect: answer64
    })
}

async function fixedQuest7() {
    return clickWrong({
        answers: answers7,
        answersCorrect: answer71
    })
}

async function fixedQuest8() {
    return clickWrong({
        answers: answers8,
        answersCorrect: answer81
    })
}

async function fixedQuest9() {
    return clickWrong({
        answers: answers9,
        answersCorrect: answer94
    })
}

async function fixedQuest10() {
    return clickWrong({
        answers: answers10,
        answersCorrect: answer102
    })
}


/* 
    Na função abaixo os await(s) não fazem diferença, porque são funções que adicionam eventos de clicks para os botões usando as variáveis entregues. Como os botões só aparecem para clique quando "display = block" e só um por vez tem esse valor, então é obrigatório clicar no anterior para o proximo aparecer. 
    
    Conclusão: Await na função abaixo, no atual momento não faz diferença. (23/03/2026)
*/

async function clickedWrong() {
     fixedQuest1();
     fixedQuest2();
     fixedQuest3();
     fixedQuest4();
     fixedQuest5();
     fixedQuest6();
     fixedQuest7();
     fixedQuest8();
     fixedQuest9();
     fixedQuest10();
}

clickedWrong()