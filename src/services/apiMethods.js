import apiBuilder from "./apiBuilder";

export const userSignInAPI = (request) => {
  return apiBuilder.API.post("users/login", request);
};
