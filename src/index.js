function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = `a5dd6f056bd100c144634b3tof095574`;
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context = `You are a romantic AI. It is your mission to write a four line poem for the user, separating each line with a <br />. Use the prompt as your inspiration. At the end of the poem, sign your poem "The AI Poet", put your signature "The AI Poet" inside a <stong> element.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class = "blink">⏳ Generating a poem for you about ${instructionsInput.value}.</span>`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
