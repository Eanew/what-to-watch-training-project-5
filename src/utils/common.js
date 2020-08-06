export const MINUTE_IN_SECONDS = 60;
export const HOUR_IN_MINUTES = 60;

export const Letter = {
  SPACE: ` `,
  COMMA: `,`,
  DASH: `-`,
};

export const Regular = {
  NUMBERS: /\d+/g,
  EXCEPT_NUMBERS: /(\D+)*[^.\d]/g,
  EMPTY_SPACE: /\s+/g,
  WORD_SEPARATION: /(\s|:\s|:)+/g,
};

export const Key = {
  SPACE: `Space`,
  ESC: `Escape`,
  ENTER: `Enter`,
};

export const toKebabCase = (defaultString) => defaultString
  .toLowerCase()
  .trim()
  .replace(Regular.WORD_SEPARATION, Letter.DASH);

export const toTwoDigit = (number) => number < 10 ? `0${number}` : number;

export const toTimeString = (seconds) => {
  const hours = Math.floor(seconds / MINUTE_IN_SECONDS / HOUR_IN_MINUTES) || null;

  const minutes = hours
    ? toTwoDigit(Math.floor(seconds / MINUTE_IN_SECONDS))
    : Math.floor(seconds / MINUTE_IN_SECONDS) || null;

  const restOfSeconds = minutes
    ? toTwoDigit(seconds % MINUTE_IN_SECONDS)
    : seconds % MINUTE_IN_SECONDS;

  return [hours, minutes, restOfSeconds].filter((timeUnit) => timeUnit !== null).join(`:`);
};

export const toDateTimeAttribute = (iso) => {
  const date = new Date(Date.parse(iso));

  return `${date.getFullYear()}-${toTwoDigit(date.getMonth() + 1)}-${toTwoDigit(date.getDate())}`;
};

export const toPercent = (max, current) => (max && !max.isNaN()) ? Math.floor(current / max * 100) : 0;

export const extend = (a, b) => Object.assign({}, a, b);
