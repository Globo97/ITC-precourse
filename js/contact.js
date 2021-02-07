/// FORMS / CONTACT PAGE
const forms = document.querySelector(".form");
const submitButton = document.getElementById("submit");

const required = document.querySelectorAll("*[required]");
const requiredElements = Array.from(required);

const radioBtns = document.querySelectorAll("input[type=radio");

const otherRadioBtn = document.getElementById("other");
const otherTxtArea = document.getElementById("other-description");

/// ENABLE "OTHER"/ TEXTAREA FIELD
function checkOtherBtn() {
  if (otherRadioBtn.checked) {
    otherTxtArea.disabled = false;
  } else {
    otherTxtArea.disabled = true;
  }
}
let radioIsChecked = undefined;
function findCheckedBtn() {
  radioBtns.forEach((btn) => {
    if (btn.checked === true) {
      radioIsChecked = btn;
    }
  });
  return radioIsChecked;
}

forms.addEventListener("input", function () {
  checkOtherBtn();
  const emptyFields = requiredElements.filter((field) => {
    return field.value.length === 0;
  });

  findCheckedBtn();
  if (emptyFields.length > 0 || radioIsChecked == undefined) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

////// SUBMIT //////

submitButton.addEventListener("click", function (event) {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");
  const reasonForContact = findCheckedBtn();
  if (reasonForContact.value === "Other") {
    reasonForContact.value = otherTxtArea.value;
  }

  event.preventDefault();

  console.log(`First Name : ${firstName.value},
    Last Name: ${lastName.value},
    Email: ${email.value},
    Comment: ${comment.value},
    Reason for the contact: ${reasonForContact.value}.`);
});
