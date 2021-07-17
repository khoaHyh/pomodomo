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
    window.localStorage.setItem('userData', JSON.stringify(res.data));

    return res;
  } catch (error) {
    return error;
  }
};

const patchUserData = async (hours, completed) => {
  try {
    const res = axios.patch(`${process.env.NEXT_PUBLIC_API_URL}${'/profile'}`, {
      hours,
      completed,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export { getUsername, getUserData, patchUserData };
