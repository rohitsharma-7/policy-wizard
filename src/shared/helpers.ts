type className = string | boolean | undefined | null;

export const clsx = (...args: className[]) => {
  const classes = args.filter((value) => value).join(" ");
  return classes;
};

export const isFloatingPointValue = (value: string) => {
  return Number(value || 0) !== parseInt(value);
};
