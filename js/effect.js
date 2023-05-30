function typing() {
  // Continuous typing in README section
  let typedBox = document.getElementById("typing");
  let line = 0;
  setInterval(animateTyping, 500);

  function animateTyping() {
    if (line) {
      typedBox.innerHTML = typedBox.innerHTML.slice(0, -1);
      line = 0;
    } else {
      typedBox.innerHTML += '|';
      line = 1;
    }
  }
}


function typeWriter() {
  // Typewriter effect
  let main = document.getElementById("typewriter");
  let txt = ">"+main.innerHTML;
  let temp = "_";
  let i = 0;

  main.innerHTML = temp;

  const id = setInterval(animateTerminal, 200);
  function animateTerminal() {
    if (i < txt.length) {
      temp = temp.slice(0, -1);
      temp += txt.charAt(i)+"_";
      main.innerHTML = temp;
      i++;
    } else {
      clearInterval(id);
    }
  }
}


typeWriter();
typing();