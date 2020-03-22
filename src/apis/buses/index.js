import Axios from "../axios.global";

export const getBusDetailsById = async payload => {
  try {
    let {
      data: { data }
    } = await Axios.post(`/getBusDetailsById`, payload);
    return data;
  } catch (err) {
    return {};
  }
};

export const getBuses = async payload => {
  try {
    let {
      data: { data }
    } = await Axios.post(`/getBuses`, payload);
    return data;
  } catch (err) {
    return [];
  }
};
