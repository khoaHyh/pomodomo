import axios from 'axios';

const getUsername = () => {
  return window.localStorage.getItem('user');
};

const getUserData = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${'/profile'}`,
      { withCredentials: true }
    );
    window.localStorage.setItem('userData', JSON.stringify(res.data));

    return res.data;
  } catch (error) {
    return error;
  }
};

const patchUserData = async (hours, completed) => {
  try {
    const res = axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}${'/profile'}`,
      {
        hours_focused: hours,
        pomodoros_completed: completed,
      },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export { getUsername, getUserData, patchUserData };
