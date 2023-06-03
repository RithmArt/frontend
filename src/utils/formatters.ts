export const formatCurrencyCell = ({
  value,
  maxFraction,
}: {
  value: string;
  maxFraction?: number;
}) => {
  if (!value) return "";
  const splitted = value.split(" ");
  if (splitted[0] === "0") {
    return `0.00 ${splitted[1] ?? ""}`;
  }
  return `${formatCurrencyWithMaxFraction(
    splitted[0],
    maxFraction || 18,
    true
  )} ${splitted[1] || ""}`;
};

export const formatCurrencyWithMaxFraction = (
  s: string | undefined,
  maxFraction = 18,
  preserveInsignificantZeros = false
) => {
  if (s == undefined) {
    return "";
  }
  let formatted = s;
  if (s.includes("e")) {
    return formatSmall(s, maxFraction);
  }
  if (s.includes(".")) {
    if (s.startsWith(".")) {
      return "0" + s;
    }
    let splitted = s.split(".");
    if (preserveInsignificantZeros) {
      const addedFraction = Number(s).toFixed(maxFraction);
      splitted = addedFraction.split(".");
    }
    splitted[0] = addComma(splitted[0]);
    if (splitted[1]) {
      formatted = splitted[0] + "." + splitted[1].substring(0, maxFraction);
    } else {
      formatted = splitted[0] + ".";
    }
    return formatted;
  }
  return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const formatSmall = (val: string, toFix = 8) => {
  let value = val;
  if (!value) {
    return "";
  }
  if (value.includes("%")) {
    return value;
  }
  if (isNaN(Number(value))) {
    return "";
  }
  if (Number(value) < 0) {
    return "";
  }
  if (Number(value) < 1) {
    value = numberToString(Number(value)).toString();
    const splitted = value.split(".");
    if (splitted[1]) {
      value = splitted[0] + "." + splitted[1].substring(0, toFix);
    }
    return value;
  } else {
    const splitted = value.split(".");
    if (splitted[1]) {
      value = splitted[0] + "." + splitted[1].substring(0, toFix);
    }
    return CurrencyFormatter(value);
  }
};

export const CurrencyFormatter = (val: string) => {
  let value = val;
  if (!value) {
    return "";
  }
  if (value.includes("%")) {
    return value;
  }
  let trail = "";
  if (value.includes(" ")) {
    if (+value.split[0] < 1) {
      return value;
    }
    value = +value.split(" ")[0] + " " + value.split(" ")[1];
    trail = " " + value.split(" ")[1];
  } else {
    if (+value < 1) {
      return value + "";
    }
    value = +value + "";
  }
  if (!value.split(".")[1]) {
    value = Number(value.split(" ")[0]).toFixed(2) + trail;
  } else if (value.split(" ")[0].split(".")[1].length < 3) {
    value = Number(value.split(" ")[0]).toFixed(2) + trail;
  }

  let separated = value.split(".");
  let comaSeparated = separated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (separated[1]) {
    return comaSeparated + "." + separated[1];
  }
  return comaSeparated;
};

export function numberToString(num) {
  let numStr = String(num);

  if (Math.abs(num) < 1.0) {
    let e = parseInt(num.toString().split("e-")[1]);
    if (e) {
      let negative = num < 0;
      if (negative) num *= -1;
      num *= Math.pow(10, e - 1);
      numStr = "0." + new Array(e).join("0") + num.toString().substring(2);
      if (negative) numStr = "-" + numStr;
    }
  } else {
    let e = parseInt(num.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      num /= Math.pow(10, e);
      numStr = num.toString() + new Array(e + 1).join("0");
    }
  }

  return numStr;
}

const addComma = (s: string) => {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
