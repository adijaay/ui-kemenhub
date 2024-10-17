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

export function getCookie(cname: string): string {
  const name = cname + "=";
  if (typeof window !== "undefined") {
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

export function getAllCookies(): { [key: string]: string } {
  const cookies: { [key: string]: string } = {};
  if (typeof window !== "undefined") {
    const ca = document.cookie.split(";");
    ca.forEach((cookie) => {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      if (name && value) {
        cookies[name] = value;
      }
    });
  }
  return cookies;
}
