export const formatDateToLocale = (inputData: string) => {
  const date = new Date(inputData);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("id-ID", options);

  return formattedDate;
};

export const formatCurrencyToLocale = (nominal: string) => {
  const number = parseInt(nominal);
  return number.toLocaleString("id-ID");
};

export const capitalizeEachWord = (words: string) => {
  return words
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
