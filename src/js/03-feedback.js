import throttle from "lodash/throttle";

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const feedback = document.querySelector(".feedback-form");

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500);

feedback.addEventListener("submit", handlerSendFeedback);
emailInput.addEventListener("input", saveFormState);
messageInput.addEventListener("input", saveFormState);

const savedValue = localStorage.getItem("feedback-form-state");
if (savedValue) {
  const { email, message } = JSON.parse(savedValue);
  emailInput.value = email || "";
  messageInput.value = message || "";
}

function handlerSendFeedback(event) {
  event.preventDefault();
  console.log(`Email: ${emailInput.value}, Message: ${messageInput.value}`);
  localStorage.removeItem("feedback-form-state");
  event.target.reset();
}
