import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';
import { StatusAlert } from './StatusAlert';
import axios from 'axios';
import { useState } from 'react';
import { loginUser } from '../authUtils';

export const LoginPanel = () => {
  const [message, setMessage] = useState([]);
  const [isSuccess, setSuccess] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async e => {
    e.preventDefault();
    const res = await loginUser(userName, password);
    setSuccess(res.data.success);
    setMessage([{ message: res.data.message }]);
    if (res.data.success === true) {
      window.localStorage.setItem('isLoggedIn', true);
      window.localStorage.setItem('user', userName);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* EMAIL */}
      <FormControl>
        <FormLabel>User Name</FormLabel>
        <Input
          id="text"
          type="text"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
      </FormControl>
      {/* PASSWORD */}
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        {/* LOGIN BUTTON */}
        <Button w="100%" my="4" type="submit" id="login-submit">
          Login
        </Button>
        {message.length >= 1 && <StatusAlert message={message} />}
        {/* HELPER */}
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </form>
  );
};
