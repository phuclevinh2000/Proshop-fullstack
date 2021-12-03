import { USER_LOGIN_REQUEST } from "../../constants/userConstant"

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })
  } catch (error) {

  }
}