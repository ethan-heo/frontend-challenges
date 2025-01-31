const formEl = document.querySelector("form");
const tipAmountEl = document.querySelector(".result__category__item__tip");
const totalEl = document.querySelector(".result__category__item__price");
const resetBtnEl = document.querySelector(
  ".result__reset-btn"
) as HTMLInputElement | null;

if (!formEl || !tipAmountEl || !totalEl || !resetBtnEl) {
  throw new Error(`Not found  element`);
}

const calcModule = () => {
  interface FormValue {
    bill: number;
    tip: number;
    customTip: number;
    people: number;
  }

  const getFormValue = () => {
    const formData = new FormData(formEl);
    const kebabToCamel = (value: string) => {
      return value.replace(/-[a-z]/g, (matcher) => {
        return matcher.slice(1).toUpperCase();
      });
    };

    return Array.from(formData).reduce(
      (acc, [key, value]) => (
        (acc[kebabToCamel(key) as keyof FormValue] = parseInt(value as string)),
        acc
      ),
      {} as FormValue
    );
  };

  const getTipAmount = () => {
    const { customTip, bill, tip } = getFormValue();

    if (customTip && customTip > 0) {
      return bill * (customTip / 100);
    }

    return bill * (tip / 100);
  };

  return {
    getTipAmountByPeople: () => {
      const { people } = getFormValue();
      return people > 0 ? getTipAmount() / people : 0;
    },
    getTotal: () => {
      const { bill, people } = getFormValue();

      return people > 0 ? (bill + getTipAmount()) / people : 0;
    },
    validatePeople: () => {
      return getFormValue().people > 0;
    },
    isActive: () => {
      const { bill, people } = getFormValue();

      return !(bill > 0 && people > 0);
    },
  };
};

const calc = calcModule();

formEl.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;

  if (target.name === "people") {
    if (calc.validatePeople()) {
      target.setAttribute("aria-invalid", "false");
    } else {
      target.setAttribute("aria-invalid", "true");
    }
  }

  if (
    ["bill", "people", "tip", "custom-tip"].some((name) => name === target.name)
  ) {
    const tipAmountValue = calc.getTipAmountByPeople();
    const totalValue = calc.getTotal();

    tipAmountEl.textContent =
      tipAmountValue > 0 ? `$${tipAmountValue.toFixed(2)}` : `$0.00`;
    totalEl.textContent =
      totalValue > 0 ? `$${calc.getTotal().toFixed(2)}` : `$0.00`;
  }

  resetBtnEl.disabled = calc.isActive();
});

formEl.addEventListener("reset", () => {
  tipAmountEl.textContent = `$0.00`;
  totalEl.textContent = `$0.00`;
});
