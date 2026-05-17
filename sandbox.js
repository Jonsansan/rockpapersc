let resultbutton = document.getElementById("wipe-result-bttn");
let usernamebox = document.getElementById("username-box");
let playbutton = document.getElementById("play-bttn");
let rockbutton = document.getElementById("rock-button");
let paperbutton = document.getElementById("paper-button");
let scissorsbutton = document.getElementById("scissors-button");
let humanoutput = document.getElementById("output-human");
let gptoutput = document.getElementById("output-gpt");
let humanchoice;
let gptchoice;

playbutton.addEventListener("click", function () {
  const name = usernamebox.value;
  if (!name) {
    alert("input needed to play");
    return;
  }
  if (!humanchoice) {
    alert("select an image/hand first");
    return;
  }

  const choices = ["rock", "paper", "scissors"];
  gptchoice = choices[Math.floor(Math.random() * 3)];

  let result;
  if (humanchoice === gptchoice) {
    result = "tie";
  } else if (
    (humanchoice === "rock" && gptchoice === "scissors") ||
    (humanchoice === "scissors" && gptchoice === "paper") ||
    (humanchoice === "paper" && gptchoice === "rock")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  humanoutput.textContent = result;
  gptoutput.textContent =
    result === "win" ? "lose" : result === "lose" ? "win" : "tie";

  console.log("You:", humanchoice, "GPT:", gptchoice);
});

rockbutton.addEventListener("click", function () {
  humanchoice = "rock";
  console.log("Selected: rock");
});

paperbutton.addEventListener("click", function () {
  humanchoice = "paper";
  console.log("Selected: paper");
});

scissorsbutton.addEventListener("click", function () {
  humanchoice = "scissors";
  console.log("Selected: scissors");
});
