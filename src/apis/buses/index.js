import Axios from "axios";
import config from "../../config";

export const getBusDetailsById = async payload => {
  try {
    let {
      data: { data }
    } = await Axios.post(`${config.API_URL}/getBusDetailsById`, payload);
    return data;
  } catch (err) {
    return {};
  }
};

export const getBuses = async payload => {
  try {
    let {
      data: { data }
    } = await Axios.post(`${config.API_URL}/getBuses`, payload);
    return data;
  } catch (err) {
    return [];
  }
};
