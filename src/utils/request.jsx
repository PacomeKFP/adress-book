import axios from "axios";

export default async function sendRequest(path, data = {}, method = "GET") {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const REQ_SUCCESS = import.meta.env.VITE_REQUEST_SUCCESS;
  const REQ_ERROR = import.meta.env.VITE_REQUEST_ERROR;

  try {
    return await axios({
      method: method,
      url: path,
      data: data,

      //
      baseURL: API_BASE_URL,
      timeout: 2500,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0,
      },
    }).then(function (response) {
      return {
        status: REQ_SUCCESS,
        data: response.data,
      };
    });
  } catch (error) {
    return {
      status: REQ_ERROR,
      data: error,
    };
  }
}
