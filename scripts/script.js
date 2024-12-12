const tweetButton = document.getElementById("tweetButton");
const charCount = document.getElementById("charCount");
const tweetInput = document.getElementById("tweetInput");
const searchField = document.getElementById("searchField");
const postCards = document.getElementById("postCards");

//login and signup forms
const usernameField = document.getElementById("usernameField");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const passwordField2 = document.getElementById("passwordField2");
const passwordLabel = document.getElementById("passwordLabel");
const imageProfile = document.getElementById("imageProfile");

//Theme change light/dark
let darkmode = localStorage.getItem("darkmode");
let themeChanger = document.getElementById("themeChanger");

function enableDarkmode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  themeChanger.innerText = "Light";
}

function disableDarkmode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  themeChanger.innerText = "Dark";
}

if (darkmode === "active") enableDarkmode();

themeChanger.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  // darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  // console.log(themeChanger)
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

console.log(themeChanger);

function randomPlaceholders() {
  let placeholders = [
    "What's on your mind?",
    "Spread the word!",
    "Express yourself!",
    "Get it off your chest!",
    "Go Forth!",
    "Share something...",
    "Say something...",
    "The world is waiting...",
  ];
  let randomize = placeholders[Math.floor(Math.random() * placeholders.length - 1)];
  let selectedPlaceholder = document.createElement("p");
  selectedPlaceholder = randomize;
  tweetInput.placeholder = selectedPlaceholder;
  console.log(randomize);
}

randomPlaceholders();

function togglePassword() {
  const passwordField = document.getElementById("passwordField");
  const passwordField2 = document.getElementById("passwordField2");
  const passwordLabel = document.getElementById("passwordLabel");
  if (passwordField.type === "password" && passwordField2.type === "password") {
    passwordField.type = "text";
    passwordField2.type = "text";
    passwordLabel.innerText = "Hide Password";
  } else {
    passwordField.type = "password";
    passwordField2.type = "password";
    passwordLabel.innerText = "Show Password";
  }
}

function post() {
  let postTweet = tweetInput.value.trim();
  let length = 250 - postTweet.length;
  charCount.innerText = length;

  if (length < 250 && length >= 0) {
    tweetButton.disabled = false;
  } else {
    tweetButton.disabled = true;
  }
}

post();

//For updating the input
tweetInput.addEventListener("input", post) 

//Signin/signUp

async function createProfile() {
  let signUpData = {
    username: usernameField.value.trim(),
    email: emailField.value.trim(),
    password: passwordField.value.trim(),
    passwordMatch: passwordField2.value.trim(),
    profilePicture: imageProfile.value,
  };

  if (signUpData.password !== signUpData.passwordMatch) {
    console.log("Doesn't match");
    alert("Password does not match bro!!!");
    return;
  }

  let promise = fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });
  let response = await promise;
  let data = await response.json();
  console.log(data);
}

async function getProfile(params) {
  let profileData = {};

  let promise = fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });
  let response = await promise;
  let data = await response.json();
  console.log(data);
}

async function name() {
  let promise = fetch("");
  let response = await promise;
  let data = await response.json();
  //another function
  console.log(data);
}

async function getAPost() {
  postCards.innerHTML = "";
  let promise = fetch("");
  let response = await promise;
  let data = await response.json();
  //another function
  console.log(data);
}

async function createPost() {
  let postData = {
    text: String(tweetInput.value.trim()),
  };
  let promise = fetch("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  let response = await promise;
  let data = await response.json();
  console.log(data);
}
