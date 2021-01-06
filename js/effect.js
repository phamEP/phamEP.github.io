function typing() {
    if (line) {
        typedBox.innerHTML = typedBox.innerHTML.slice(0, -1);
        line = 0;
    } else {
        typedBox.innerHTML += '|';
        line = 1;
    }
    setTimeout(typing, 500);
}

function typeWriter() {
  if (i < txt.length) {
    temp = temp.slice(0, -1);
    temp += txt.charAt(i)+"_";
    main.innerHTML = temp;
    i++;
    setTimeout(typeWriter, 120);
  }
}

// Typewriter effect
let main = document.getElementById("typewriter");
let txt = ">"+main.innerHTML;
let temp = "_";
let i = 0;

main.innerHTML = temp;
setTimeout(typeWriter, 200);

let typedBox = document.getElementById("typing");
let line = 0;
setTimeout(typing, 200);