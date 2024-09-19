export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const isDateExpired = (dateString: string): boolean => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Normalize the dates to only compare the date part (ignoring time)
  const inputDateOnly = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
  );
  const currentDateOnly = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  );

  if (currentDateOnly > inputDateOnly) {
    return true;
  } else if (inputDateOnly > currentDateOnly) {
    return false;
  } else {
    return false;
  }
};
