const newDate = new Date();

export const formattedDate = `${newDate.getFullYear()}-${
  newDate.getMonth() + 1
}-${newDate.getDate()}`;
