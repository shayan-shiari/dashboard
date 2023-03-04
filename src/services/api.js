import axios from "axios";
const main_url = "http://127.0.0.1:8000";

export const fetchApi = async (url, body) => {
  let lastResult;
  // token
  if (body) {
    await axios
      .post(`${main_url}/${url}`, body, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // "admin-API-Token": tokens,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  } else {
    await axios
      .get(`${main_url}/${url}`, {
        headers: {
          "Content-Type": "application/json",
          // "admin-API-Token": tokens,
        },
      })
      .then((result) => {
        lastResult = result;
      });
  }
  return lastResult.data;
};
