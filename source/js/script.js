document.querySelector("#submit").addEventListener("click", () => {
  document.querySelector("#desc").innerHTML = "";

  input = document.querySelector("#input-text").value.toUpperCase().split("");
  inputPlus = Number(document.querySelector("#input-plus").value);
  res = [];

  for (i = 0; i < input.length; i++) {
    let getValue = character[input[i]].val + inputPlus;
    desc = "";
    if (getValue < 26) {
      res[i] = (getValue + 10).toString(36);
      desc +=
        input[i] +
        " = " +
        character[input[i]].val +
        " | (" +
        character[input[i]].val +
        " + " +
        inputPlus +
        ")%26 = " +
        getValue +
        " | " +
        getValue +
        " = " +
        (getValue + 10).toString(36);
    } else if (input[i] == " ") {
      res[i] = " ";
    } else if (input[i] == ",") {
      res[i] = ",";
    } else if (input[i] == ".") {
      res[i] = ".";
    } else if (input[i] == "!") {
      res[i] = "!";
    } else if (input[i] == "?") {
      res[i] = "?";
    } else if (input[i] == "-") {
      res[i] = "-";
    } else if (input[i] == ")") {
      res[i] = ")";
    } else if (input[i] == "(") {
      res[i] = "(";
    } else {
      res[i] = ((getValue % 26) + 10).toString(36);
      desc +=
        input[i] +
        " = " +
        character[input[i]].val +
        " | (" +
        character[input[i]].val +
        " + " +
        inputPlus +
        ")%26 = " +
        (getValue % 26) +
        " | " +
        (getValue % 26) +
        " = " +
        ((getValue % 26) + 10).toString(36);
    }

    document.querySelector("#desc").innerHTML += `<li>${desc}</li>`;

    text = res.toString();
    getString(text.toUpperCase());
  }
});

let getString = (val) => {
  document.querySelector("#result").innerHTML = val.replaceAll(",", "");
};

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) => {
  textarea.style.height = `60px`;
  let getScrlHeight = e.target.scrollHeight;
  textarea.style.height = `${getScrlHeight}px `;
});

const next1 = document.querySelector("#next1");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");

$("#box-form2").hide();
$("#box-form3").hide();
next1.addEventListener("click", () => {
  $("#box-form2").fadeIn(500);
  $("#step2").addClass("active");
});
submit.addEventListener("click", () => {
  $("#box-form3").fadeIn(500);
  $("#step3").addClass("active");
});
reset.addEventListener("click", () => {
  $("#box-form2").hide();
  $("#box-form3").hide();
  $("#step2").removeClass("active");
  $("#step3").removeClass("active");
  $("#input-plus").val("");
  $("#input-text").val("");
});
