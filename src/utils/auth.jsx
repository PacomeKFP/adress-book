import sendRequest from "./request";

const REQ_SUC = import.meta.env.VITE_REQUEST_SUCCESS;

async function getUserByEmail(email) {
  return await sendRequest(`/users?email=${email}`).then((response) => {
    if (response.status === REQ_SUC) return response.data[0];
    return null;
  });
}



function isValidEmail(email) {
  const validPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return email.match(validPattern) !== null;
}

export { getUserByEmail, isValidEmail };
