function displayJoke(response) {
  let jokeResponse = response.data.answer;
  new Typewriter("#please_wait", {
    strings: jokeResponse,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}

function tellAJoke() {
  let waitElement = document.querySelector("#please_wait");
  let pleaseWaitElement = "Generating a joke for you.....please wait....";
  let context =
    "Imagine you're at a social gathering with friends, and the conversation has been going on for a while. You notice that the atmosphere could use a bit of lightening up, so you decide to break the ice with a request: 'Hey everyone, how about we lighten the mood with a joke? Who's got a good one to share?";
  let prompt =
    "Generate a light-hearted joke that would bring a smile to someone's face.";
  let apiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  waitElement.innerHTML = pleaseWaitElement;
  axios.get(apiURL).then(displayJoke);
}

let buttonElement = document.querySelector("#tell_me_a_joke");
buttonElement.addEventListener("click", tellAJoke);
