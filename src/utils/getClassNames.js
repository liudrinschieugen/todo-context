export const getClassNames = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
