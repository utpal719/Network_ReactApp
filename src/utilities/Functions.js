import moment from "moment";

// FIXME: Use moment or react-moment.
export const formatAMPM = strTime => {
  let strSplit = strTime.split(":");
  let hours = strSplit[0];
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutes = strSplit[1];

  const strAMAPMTime = `${hours}:${minutes} ${ampm}`;
  return strAMAPMTime;
};

// FIXME: Use a localization library for formatting.
export const numberWithCommas = x => {
  if (!x) {
    return "";
  }

  const [whole, fraction] = x.toString().split(".");
  let number = `${(whole || "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  if (fraction) {
    const decimal = `.${fraction}`;

    number = `${number}.${
      parseFloat(decimal)
        .toFixed(2)
        .split(".")[1]
    }`;
  }

  return number;
};

export const removeCommas = x => {
  return typeof x === "string" ? x.replace(/,/g, "") : "";
};

export function extractKeyName(name) {
  const keyName = String(name)
    .toLowerCase()
    .replace(/ - | /g, "_");

  return keyName;
}

export const formatDate = (value, dateFormat) => {
  if (!value) {
    return "";
  }
  return moment(value).format("MM DD, YYYY");
};

export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const sortList = list =>
  list.sort((a, b) => a.label.localeCompare(b.label));

export const sortListByHierarchy = list =>
  list.sort((a, b) =>
    `${a.title} > ${a.label}`.localeCompare(`${b.title} > ${b.label}`)
  );

export const countryFilter = dataSource => {
  let countryFilter = [];
  let uniqueContry = [];
  let counter = 11;
  dataSource.forEach(eachData => {
    if (uniqueContry.indexOf(eachData.WorkCountry) === -1) {
      counter = counter + 1;
      countryFilter.push({
        id: counter,
        label: eachData.WorkCountry,
        value: eachData.WorkCountry,
        checked: false
      });
      uniqueContry.push(eachData.WorkCountry);
    }
  });
  return countryFilter;
};

export const listContains = (text, key) => {
  if (
    typeof text !== "string" ||
    text.length <= 0 ||
    typeof key !== "string" ||
    key.length <= 0
  )
    return false;
  text = text.toLowerCase();
  key = key.toLowerCase();
  return text.indexOf(key) >= 0 ? true : false;
};

const checkClientSupportLocalStorage = () => {
  if (typeof Storage !== "undefined") {
    return true;
  } else {
    // Sorry! No Web Storage support..
    return false;
  }
};
