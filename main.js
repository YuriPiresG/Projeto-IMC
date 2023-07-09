const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const errorDiv = document.querySelector(".alertError");

const Modal = {
  wrapper: document.querySelector(".modalWrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal .close"),

  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function handleCloseModal() {
  Modal.close();
  inputWeight.value = "";
  inputHeight.value = "";
}

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  if (notNumber(weight) || notNumber(height)) {
    errorDiv.classList.add("open");
  } else {
    errorDiv.classList.remove("open");
    const result = IMC(weight, height);
    Modal.message.innerHTML = `Seu IMC é de ${result}`;
    Modal.open();
  }
};

function notNumber(value) {
  return isNaN(value) || value == "";
}

Modal.buttonClose.onclick = handleCloseModal;
