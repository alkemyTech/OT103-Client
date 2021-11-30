import { Get } from "./publicApiService";

export const getNews = () => {
  return Get("news");
};
