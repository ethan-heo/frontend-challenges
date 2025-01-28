const [userNameEls, userEmailEls, userAvatarEls, userGithubNameEls] = [
  ".user-name",
  ".user-email",
  ".ticket__user__avatar",
  ".user-github-name",
].map((selector) => document.querySelectorAll(selector));

if (
  userNameEls.length === 0 &&
  userEmailEls.length === 0 &&
  userAvatarEls.length === 0 &&
  userGithubNameEls.length === 0
) {
  throw new Error("User name element not found");
}

const userInfo = localStorage.getItem("user-info");

if (!userInfo) {
  throw new Error("User info not found");
}

const { name, email, avatar, githubUsername } = JSON.parse(userInfo);

userNameEls.forEach((el) => {
  el.textContent = name;
});

userEmailEls.forEach((el) => {
  el.textContent = email;
});

userAvatarEls.forEach((el) => {
  (el as HTMLDivElement).style.backgroundImage = `url(${avatar})`;
});

userGithubNameEls.forEach((el) => {
  el.textContent = githubUsername;
});
