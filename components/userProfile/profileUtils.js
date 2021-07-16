import axios from 'axios';

axios.defaults.withCredentials = true;
const getUsername = () => {
  return window.localStorage.getItem('user');
};

const getUserData = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${'/profile'}`
    );
    // console.log(res);
    return res;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const patchUserData = async () => {};

export { getUsername, getUserData, patchUserData };
