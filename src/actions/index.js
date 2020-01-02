export const setFavorite = payload => {
  return {
    type: "SET_FAVORITE",
    payload
  };
};

export const deleteFavorite = payload => {
  return {
    type: "DELETE_FAVORITE",
    payload
  };
};

export const LoginRequest = payload => {
  return {
    type: "LOGIN_REQUEST",
    payload
  };
};

export const LogoutRequest = payload => {
  return {
    type: "LOGOUT_REQUEST",
    payload
  };
};

export const RegisterRequest = payload => {
  return {
    type: "REGISTER_REQUEST",
    payload
  };
};

export const GetVideoSource = payload => {
  return {
    type: "GET_VIDEO_SOURCE",
    payload
  };
};
