function generateQuote (event) {
    event.preventDefault();

    new Typewriter('#quote', {
     strings: '"The success is the sum of small efforts, repeated day in and day out." — Robert Collier',
     autoStart: true,
     delay: 50,
     cursor:"",
    });

}

let generatorElement = document.getElementById('generator');
generatorElement.addEventListener('submit', generateQuote);