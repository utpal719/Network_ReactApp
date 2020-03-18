import Axios from "axios";
import config from "../../config";

export const getBusDetailsById = async payload => {
  let {
    data: { data }
  } = await Axios.post(`${config.API_URL}/getBusDetailsById`, payload);
  return data;
};

export const getBuses = async payload => {
  let {
    data: { data }
  } = await Axios.post(`${config.API_URL}/getBuses`, payload);
  return data;
};
