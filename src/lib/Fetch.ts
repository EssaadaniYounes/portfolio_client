import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const Accept = "application/json";

const getAll = async (url: string, headers?: any) => {
  try {
    const data = await axios.get(API_URL + url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const post = async (url: string, data: any, headers?: any) => {
  const res = await axios({
    method: "POST",
    url: API_URL + url,
    headers: {
      Accept: Accept,
      ...headers,
    },
    data,
  });
  return res;
};
const put = async (url: string, data: any, headers?: any) => {
  const res = await axios({
    method: "PUT",
    url: API_URL + url,
    headers: {
      Accept: Accept,
      ...headers,
    },
    data,
  });
  return res;
};

const _delete = async (url: string, headers?: any) => {
  const res = await axios({
    method: "DELETE",
    url: API_URL + url,
    headers: {
      Accept: Accept,
      ...headers,
    },
  });
  return res.data;
};

export { getAll, post, put, _delete };
