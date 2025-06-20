const btn = document.querySelector("#submit_btn");
const inp = document.querySelector(`input[type="number"]`);
const res = document.querySelector("#result_portion");

let attempts = 10; // Counter for how many guesses the user has left.
let gv = 1; //guess value
let fl = 0; //finished logic

const randno = Math.floor(Math.random() * 100 + 1); //generate a random number

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (fl) {
    return;
  }
  let val = inp.value; //  val get a string value here
  val = Number(val); // here this string value is changed to a number

  if (!val || val < 1 || val > 100) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  res.className = res.className.replace("hidden", "").trim(); // remove "hidden" class
  res.className += " block"; // add class block

  if (gv) {
    const guess_heading = document.createElement("h3");
    guess_heading.innerHTML = "Guess Values";
    guess_heading.style.textAlign = "center";
    guess_heading.style.marginBottom = "1.25rem";
    guess_heading.style.fontWeight = "bold";
    res.appendChild(guess_heading);
    let attempts_msg = document.createElement("p");
    attempts_msg.innerHTML = `Total attempts ${attempts}`;
    res.appendChild(attempts_msg);
    gv = 0;
  }

  if (val === randno) {
    let elem = document.createElement("p");
    elem.innerHTML = "Right Guess";
    btn.disabled = true;
    inp.disabled = true;
    res.appendChild(elem);
    fl = 1;
  } else if (val > randno) {
    let elem = document.createElement("p");
    attempts -= 1;
    elem.innerHTML = `Too large ${val} <br> remaining attempts ${attempts}`;
    res.appendChild(elem);
  } else {
    let elem = document.createElement("p");
    attempts -= 1;
    elem.innerHTML = `Too small ${val} <br> remaining attempts ${attempts}`;
    res.appendChild(elem);
  }
  if (attempts === 0) {
    let elem = document.createElement("p");
    elem.innerHTML(`You loose`);
    btn.disabled = true;
    inp.disabled = true;
    res.appendChild(elem);
    fl = 1;
  }
});
