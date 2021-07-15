import axios from 'axios';

const getUsername = () => {
  return window.localStorage.getItem('user');
};

// http request : GET
const getUserData = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${'/'}`);
};

// http request : PATCH
// req params:
// hours_focused
// pomodoros_completed
const patchUserData = () => {};

export { getUsername, getUserData, patchUserData };
