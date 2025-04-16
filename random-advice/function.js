// const adviceElement = document.getElementById('advice');
// const adviceNumber = document.getElementById('number');
// const button = document.getElementById('button');

// function adjustFontSize() {
     
// }

// function renderAdcive(advice) {
//     adviceElement.textContent = advice
// }

// async function getAdvice() {
//     const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`; // timestamp-ul este folosit pentru a nu permite cache-ul si a nu repeta aceiasi valoare
//     const adNumb = Math.floor(Math.random() * 1000) + 1;
//     let advice = 'Not downloaded advice';
//     adviceNumber.textContent = `Advice # ${adNumb}`;
//     try {
//         const response = await fetch(url, { cache: "no-store" }); // nu permite cache-ul, adica nu repeta aceiasi valoare
//         const data = await response.json()
//         advice = data.slip.advice;
//     } catch (e) {
//         console.log(e)
//     }
//     renderAdcive(advice)
// }

// button.addEventListener('click', getAdvice);
const adviceElement = document.getElementById('advice');
const adviceNumber = document.getElementById('number');
const button = document.getElementById('button');

function adjustFontSize() {
    // Funcția poate fi implementată dacă este necesar
}

function renderAdvice(advice) {
    adviceElement.textContent = advice;
}

async function getAdvice() {
    const url = `https://api.adviceslip.com/advice`; // URL corect fără timestamp
    const adNumb = Math.floor(Math.random() * 1000) + 1;
    let advice = 'Not downloaded advice';
    try {
        const response = await fetch(url, { cache: "no-store" }); // Nu permite cache-ul
        const data = await response.json();
        advice = data.slip.advice;
        adviceNumber.textContent = `Advice # ${data.slip.id}`; // Afișează ID-ul sfatului
    } catch (e) {
        console.log(e);
    }
    renderAdvice(advice);
}

button.addEventListener('click', getAdvice);