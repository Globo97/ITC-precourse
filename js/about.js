///// --- MAPS ---- /////////
const map = document.getElementById("map");
const citiesUrl = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26287.74957531529!2d-58.50666940225192!3d-34.55434795020996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6ecec1f5741%3A0x42502844d305770b!2sSaavedra%2C%20CABA!5e0!3m2!1ses!2sar!4v1609564873875!5m2!1ses!2sar",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26816.79002250519!2d35.07640686875886!3d32.84263688092879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db6e6b2b819d1%3A0x3f58f28f28ab851e!2sKiryat%20Bialik%2C%20Israel!5e0!3m2!1ses!2sar!4v1609718411700!5m2!1ses!2sar",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42005832406!2d13.144558975224557!3d52.50651328316221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerl%C3%ADn%2C%20Alemania!5e0!3m2!1ses!2sar!4v1609718458932!5m2!1ses!2sar",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4733947636!2d-0.24167993980549748!3d51.528558243157505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1609718481521!5m2!1ses!2sar",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.27121767413!2d150.65179273954445!3d-33.84792704588164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sS%C3%ADdney%20Nueva%20Gales%20del%20Sur%2C%20Australia!5e0!3m2!1ses!2sar!4v1609718507662!5m2!1ses!2sar",
];

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

function previousCity() {
  const actualCityIndex = citiesUrl.findIndex((url) => {
    return map.src === url;
  });
  nextBtn.disabled = false;
  if (actualCityIndex > 0) {
    map.src = citiesUrl[actualCityIndex - 1];
  } else {
    previousBtn.disabled = true;
  }
}
function nextCity() {
  const actualCityIndex = citiesUrl.findIndex((url) => {
    return map.src === url;
  });
  previousBtn.disabled = false;
  if (actualCityIndex < citiesUrl.length - 1) {
    map.src = citiesUrl[actualCityIndex + 1];
  } else {
    nextBtn.disabled = true;
  }
}

/////////
previousBtn.addEventListener("click", function () {
  previousCity();
});
nextBtn.addEventListener("click", function () {
  nextCity();
});

//// ----- ABOUT CARDS ----- ////
function showAndHide(item) {
  item.classList.toggle("hide");
  item.classList.toggle("showing");
  return;
}

function closeExperienceTabs() {
  const experienceList = document.getElementById("experience-list").children;
  const experienceListArray = Array.from(experienceList);

  if (experienceCard.classList.contains("hide")) {
    experienceOptionsArray.forEach((option) => {
      option.classList.add("hide");
    });
    experienceListArray.forEach((list) => {
      list.classList.remove("selected");
    });
  }
}

/////////
const aboutCards = document.querySelector(".about-container");
const cards = aboutCards.children;
const cardsArray = Array.from(cards);
const titles = document.querySelectorAll("h2");
const titlesArray = Array.from(titles);

let displayContent = "";

function cardFlip(event) {
  switch (event.target.tagName) {
    case "ARTICLE":
      const clickedArticle = cardsArray.find((card) => {
        return card.id === event.target.id;
      });
      displayContent = clickedArticle.children[1];
      showAndHide(displayContent);
      closeExperienceTabs();
      break;
    case "H2":
      const titleClicked = titlesArray.find((title) => {
        return title.innerText === event.target.innerText;
      });
      displayContent = titleClicked.nextElementSibling;
      showAndHide(displayContent);

      closeExperienceTabs();

      break;
    case displayContent.tagName:
      showAndHide(displayContent);
  }
}

/////////
aboutCards.addEventListener("click", function (event) {
  cardFlip(event);
});

///// EXPERIENCE OPTIONS DISPLAY
const experienceCard = document.getElementById("experience-options");
const experienceOptions = experienceCard.nextElementSibling.children;
const experienceOptionsArray = Array.from(experienceOptions);

function displayExperienceOption(event) {
  const clickedOptionLC = event.target.dataset.area.toLowerCase();

  const optionSelected = experienceOptionsArray.find((option) => {
    const optionID = option.id.toLowerCase();
    return optionID.includes(clickedOptionLC);
  });
  optionSelected.classList.toggle("hide");
  event.target.classList.toggle("selected");
}

/////////
experienceCard.addEventListener("click", function (event) {
  displayExperienceOption(event);
});
