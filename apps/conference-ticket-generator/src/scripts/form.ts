const form: HTMLFormElement | null = document.querySelector(".register-form");

if (!form) {
  throw new Error("Form not found");
}
const ERROR_CODE = {
  REQUIRED: "required",
  INVALID_EMAIL: "invalid-email",
  INVALID_AVATAR_IMG_TYPE: "invalid-avatar-img-type",
  INVALID_AVATAR_SIZE: "invalid-avatar-size",
} as const;
type ValidationName = "name" | "email" | "avatar" | "github-username";

interface ValidationRule {
  required: true;
  validate?: (value: any) => string | null;
}

type ValidationMessages = Partial<Record<ValidationName, string>>;
const VALIDATION_RULES: Record<ValidationName, ValidationRule> = {
  name: {
    required: true,
  },
  email: {
    required: true,
    validate: (value) => {
      if (
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
          value
        )
      ) {
        return ERROR_CODE.INVALID_EMAIL;
      }

      return null;
    },
  },
  avatar: {
    required: true,
    validate: (value) => {
      const { type, size } = value as File;
      const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
      const MAX_SIZE = 5 * 1024 * 100;

      console.log(value);

      if (!ALLOWED_TYPES.includes(type)) {
        return ERROR_CODE.INVALID_AVATAR_IMG_TYPE;
      }

      if (size > MAX_SIZE) {
        return ERROR_CODE.INVALID_AVATAR_SIZE;
      }

      return null;
    },
  },
  "github-username": {
    required: true,
  },
};

const validate =
  (result: ValidationMessages) => (value: FormDataEntryValue, key: string) => {
    const rule = VALIDATION_RULES[key as ValidationName];
    const checkValue = (value: any) => {
      if (value instanceof File) {
        return !value.name;
      } else {
        return !value;
      }
    };

    if (!rule) {
      throw new Error(`Validation rule not found for ${key}`);
    }

    if (rule.required && checkValue(value)) {
      result[key as ValidationName] = ERROR_CODE.REQUIRED;
      return;
    }

    if (!rule.validate) {
      return;
    }

    const message = rule.validate(value);

    if (!message) {
      return;
    }

    result[key as ValidationName] = message;
  };

const setValidationUI = (validateMessages: ValidationMessages) => {
  for (const [name, code] of Object.entries(validateMessages)) {
    const input = form.querySelector(
      `[name=${name}]`
    ) as HTMLInputElement | null;

    if (!input) {
      throw new Error(`Input not found for ${name}`);
    }

    input.dataset["describedby"] = code;
    input.setAttribute("aria-invalid", "true");
  }
};

const resetValidationUI = () => {
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("data-describedby");
  });
};

const setUserInfo = (formData: FormData) => {
  const avatar = formData.get("avatar") as File;
  const reader = new FileReader();

  reader.readAsDataURL(avatar);
  reader.onload = () => {
    const userInfo = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      avatar: reader.result as string,
      githubUsername: formData.get("github-username") as string,
    };

    localStorage.setItem("user-info", JSON.stringify(userInfo));
  };
};

const submitEv = (e: SubmitEvent) => {
  e.preventDefault();

  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const validationMessages: ValidationMessages = {};

  formData.forEach(validate(validationMessages));

  const invalid = Object.entries(validationMessages).length > 0;

  resetValidationUI();

  if (invalid) {
    setValidationUI(validationMessages);
    return;
  }

  setUserInfo(formData);
  location.href = `/frontend-challenges/projects/conference-ticket-generator/ticket.html`;
};

form.addEventListener("submit", submitEv);
