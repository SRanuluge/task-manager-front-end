import apiBuilder from "./apiBuilder";

export const userSignInAPI = (request, token) => {
  return apiBuilder.API.post("users/login", request, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const userSignUpAPI = (request) => {
  return apiBuilder.API.post("users", request);
};

export const userSignOutAPI = (token) => {
  return apiBuilder.API.post(
    "users/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const userSignOutAllAPI = (token) => {
  return apiBuilder.API.post(
    "users/logoutAll",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Tasks
export const createTaskAPI = (request, token) => {
  return apiBuilder.API.post("/tasks", request, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTaskListAPI = (queryParam, token) => {
  return apiBuilder.API.get(
    "/tasks",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    { params: { sortBy: queryParam } }
  );
};
export const deleteTaskAPI = (id, token) => {
  return apiBuilder.API.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
