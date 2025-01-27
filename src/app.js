/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let form = document.getElementById("paymentForm");
let send = document.getElementById("send-submit");
let alertMessage = document.getElementById("alert");

window.onload = function() {
  send.addEventListener("click", function(event) {
    const requiredFieldIds = [
      "card-number",
      "cvc-number",
      "amount",
      "first-name",
      "last-name",
      "city",
      "state",
      "postal-code",
      "floatingTextarea2"
    ];
    let isValid = true;

    requiredFieldIds.forEach(id => {
      const field = document.getElementById(id);
      if (!field || !field.value.trim()) {
        isValid = false;
        if (field) {
          field.classList.add("is-invalid");
        }
      } else {
        if (field) {
          field.classList.remove("is-invalid");
        }
      }
    });

    if (!isValid) {
      event.preventDefault();
      alertMessage.classList.remove("d-none");
    } else {
      alertMessage.classList.add("d-none");
    }
  });
};
