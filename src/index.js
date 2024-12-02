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
        "You are a motivational coach, inspiring people to achieve their goals no matter what, and helping them recognize their potential through short quotes from memorable historical figures. Respond entirely in the language of the user's input, including both the motivational quote and the personal motivational boost. Try not to repeat the same quote for the same input; if the input is the same, look for a different quote. Format the response using basic HTML. The quote should be enclosed in a `<blockquote>` tag, and the personal boost should be separated by a `<br>` tag.";
    let apiURL = 
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let emElement = document.querySelector("em");
    emElement.classList.add("hidden");

    let quoteElement = document.querySelector("#quote");
    quoteElement.innerHTML = `<div class="blink">Your boost for ${instructionsInput.value} is coming...</div>`
        axios.get(apiURL).then(displayQuote);    
}

let generatorElement = document.getElementById('generator');
generatorElement.addEventListener('submit', generateQuote);