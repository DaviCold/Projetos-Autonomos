import { wrong, preventspan } from "./index.js";

export { answerWrong, clickWrong }


/* Inicia a animação de incorreta caso click na resposta errada. */

function answerWrong() {
    wrong.setAttribute("style", "animation: wrongAnimate 0.8s ease; animation-fill-mode: forwards;");
    preventspan.setAttribute("style", "display: block");

    setTimeout(() => {
        wrong.setAttribute("style", "animation: wrongAnimated 0.8s ease; animation-fill-mode: forwards;");
        setTimeout(() => {
            preventspan.removeAttribute("style");
        }, 700);
    }, 1600);
}


/* Adiciona o evento de click nas respostas incorretas. */

function clickWrong({
    answers, answersCorrect
}) {
    Object.values(answers).forEach(answer => {
        if (answer !== answersCorrect) {
            answer.addEventListener("click", answerWrong)
        }
    })
}
