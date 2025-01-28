const avatarEl = document.getElementById("avatar") as HTMLFormElement | null;

if (!avatarEl) {
  throw new Error("Avatar element not found");
}
const imgEl = document.querySelector(
  ".register-form__avatar__upload__icon img"
) as HTMLImageElement | null;

if (!imgEl) {
  throw new Error("Image element not found");
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
const originalAvatarSrc = imgEl.src;

avatarEl.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  const [file] = target.files ?? [];

  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      imgEl.src = reader.result as string;
      target.dataset[COMMAND.UPLOADED] = "true";
    };
  }
});

removeBtn.addEventListener("click", () => {
  avatarEl.value = "";
  avatarEl.dataset[COMMAND.UPLOADED] = "false";
  imgEl.src = originalAvatarSrc;
});

changeBtn.addEventListener("click", () => {
  avatarEl.click();
});
