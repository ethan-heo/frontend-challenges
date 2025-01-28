const avatarEl = document.getElementById("avatar") as HTMLFormElement | null;

if (!avatarEl) {
  throw new Error("Avatar element not found");
}
const divEl = document.querySelector(
  ".register-form__avatar__upload__icon div"
) as HTMLImageElement | null;

if (!divEl) {
  throw new Error("Div element not found");
}

const [removeBtn, changeBtn] = [
  ".register-form__avatar__upload__btn--remove",
  ".register-form__avatar__upload__btn--change",
].map((selector) => document.querySelector(selector));

if (!removeBtn || !changeBtn) {
  throw new Error("Button element not found");
}

const COMMAND = {
  UPLOADED: "uploaded",
};
const originalAvatarSrc = window.getComputedStyle(divEl).backgroundImage;

avatarEl.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  const [file] = target.files ?? [];

  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      divEl.style.backgroundImage = `url(${reader.result})` as string;
      target.dataset[COMMAND.UPLOADED] = "true";
    };
  }
});

removeBtn.addEventListener("click", () => {
  avatarEl.value = "";
  avatarEl.dataset[COMMAND.UPLOADED] = "false";
  divEl.style.backgroundImage = originalAvatarSrc;
});

changeBtn.addEventListener("click", () => {
  avatarEl.click();
});
