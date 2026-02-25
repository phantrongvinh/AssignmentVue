export const formateDate = (date) => {
  if (!date) return "";
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(newDate);
};
