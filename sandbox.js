let resultbutton = document.getElementById("wipe-result-bttn");
let usernamebox = document.getElementById("username-box");
let playbutton = document.getElementById("play-bttn");
let rockbutton = document.getElementById("rock-button");
let paperbutton = document.getElementById("paper-button");
let scissorsbutton = document.getElementById("scissors-button");
let humanoutput = document.getElementById("output-human");
let gptoutput = document.getElementById("output-gpt");

playbutton.addEventListener("click", function () {
  const name = usernamebox.value;
  console.log(name);
});
