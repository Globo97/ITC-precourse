///// --- GITHUB FETCH
const GITHUB_URL = "https://api.github.com/users/Globo97";
const githubAccount = document.getElementById("my-name");
const profileImage = document.getElementById("profile-image");

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    profileImage.src = data.avatar_url;
    githubAccount.innerText = data.login;
  });

//// LOAD ANIMATION
const card = document.getElementById("home-card");
const pageWrapper = document.querySelector(".page-wrapper");
const section = document.querySelector("section");

window.onload = () => {
  card.style.right = "0%";
};

pageWrapper.addEventListener("click", function (event) {
  if (event.target === card) {
    card.classList.add("card-on-click");

    pageWrapper.classList.add("wrapper-on-click");
    section.style.marginTop = "0";

    profileImage.style.animation = "spin 3s ease-in-out infinite";
  } else {
    card.classList.remove("card-on-click");

    pageWrapper.classList.remove("wrapper-on-click");
    section.style.marginTop = "8%";

    profileImage.style.animation = "spin 3s ease-in-out 1";
  }
});
