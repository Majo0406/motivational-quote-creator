function displayQuote (response) {
    new Typewriter('#quote', {
     strings: response.data.answer,
     autoStart: true,
     delay: 50,
     cursor:"",
    });   
}

function generateQuote (event) {
    event.preventDefault();

    let instructionsInput = document.getElementById('instructions');
    let apiKey = "638dfae104o02t4843b3b3d0b32d7760";
    let prompt = 
        `Generate a motivational quote about ${instructionsInput.value}`;
    let context = 
        "You are a motivational coach, inspiring people to achieve their goals no matter what, and helping them recognize themselves through short quotes from memorable historical figures with basic HTML structure. Try not to repeat the same quote for the same input; if the input is the same, look for a different quote. Provide the quote in the language the user provides. Also give and extra short personal boost. Separete the personal boost with a </br>";
    let apiURL = 
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayQuote);    
}

let generatorElement = document.getElementById('generator');
generatorElement.addEventListener('submit', generateQuote);