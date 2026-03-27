import { continuar, padExposed } from "../variables";

export { nextAskTypeOne, nextAskTypeTwo };


// Obs.: futureAnswers só contém nas funções que serão seguidas de perguntas tipo 2, porque são necessárias para seta.

function nextAskTypeOne(
    nextAnswers,
    nextButtons,
    nextLines
) {
    return new Promise ( function (resolve) {
        continuar.addEventListener("click", function() {
            padExposed.setAttribute("style", "animation: toDesappear 1.5s ease forwards, borderAnimated 3s linear infinite forwards");
            preventspan.setAttribute("style", "display: block");
            
            setTimeout(function(){
                nextAnswers.setAttribute("style", "display: flex");
                contquest.setAttribute("style", "display: flex");
                contquest.classList.add("contquestAppear");
                
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add(`enter${i+1}`);
                }
    
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].setAttribute("style", "display: block");
                }
            }, 1000)

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500)

            setTimeout (function () {
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`);
                    nextButtons[i].setAttribute("style", "opacity: 1");
                    padExposed.style.display = "none";
                    preventspan.removeAttribute("style");
                }

                resolve();
            }, 2600);
        });
    });
}

function nextAskTypeTwo(
    futureAnswers,
    nextAnswers,
    nextButtons,
    nextLines
) {
    return new Promise ( function (resolve) {
        continuar.addEventListener("click", function() {
            padExposed.setAttribute("style", "animation: toDesappear 1.5s ease forwards, borderAnimated 3s linear infinite forwards");
            nextAnswers.classList.add("answerstypetwo");
            preventspan.setAttribute("style", "display: block");
            arrow.setAttribute("style", "display:flex");
            arrow.classList.add("arrowAppear");
            let answersValue = Object.values(futureAnswers);
            setAnswersValues(answersValue);
            preventspan.setAttribute("style", "display: block");

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo");
            }

            nextButtons[0].setAttribute("style", "display: block");
            nextButtons[0].classList.add("toappear");
            
            setTimeout(function(){
                nextAnswers.setAttribute("style", "display: flex");
                contquest.setAttribute("style", "display: flex");
                contquest.classList.add("contquestAppear");
    
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].setAttribute("style", "display: block");
                }
            }, 1000)

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500)

            setTimeout (function () {
                padExposed.style.display = "none";
                nextButtons[0].classList.remove("toappear");
                nextButtons[0].classList.add("buttonOneVisible");
                preventspan.removeAttribute("style");

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add("buttonInvisible");
                }

                resolve();
            }, 2600);
        });
    });
}