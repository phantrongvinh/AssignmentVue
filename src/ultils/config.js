import { users } from "@/db";

export const getAuthor = (authorID) => {
  return users.value.find((u) => u.userID === authorID) ?? null;
};

export const truncate = (content, maxLength = 100) => {
  if (!content) return "";
  return content.length > maxLength
    ? content.slice(0, maxLength) + "..."
    : content;
};
