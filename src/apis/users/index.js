import Axios from "../axios.global";

export const authenticate = async function({ userName, password }) {
  try {
    let data = await Axios.post(`/authenticate`, {
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
    } = await Axios.post(`/registerUser`, payload);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
