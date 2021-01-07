import { apiTokenService } from "../services";
//import { alertActions } from "./";
import { apiTokenConstants } from "../constants";

export const apiTokenActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    apiTokenService.login(username, password).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
        //dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: apiTokenConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: apiTokenConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: apiTokenConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  apiTokenService.logout();
  return { type: apiTokenConstants.LOGOUT };
}
