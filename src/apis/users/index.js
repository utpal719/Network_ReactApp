import Axios from "axios";
import config from "../../config";

export const authenticate = async function({ userName, password }) {
  try {
    let {
      data: { data }
    } = await Axios.post(`${config.API_URL}/authenticate`, {
      userName,
      password
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const register = async function(payload) {
  try {
    let {
      data: { data }
    } = await Axios.post(`${config.API_URL}/registerUser`, payload);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
