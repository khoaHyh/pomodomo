import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { StatusAlert } from './StatusAlert';
import axios from 'axios';
import { useState } from 'react';

export const LoginPanel = () => {
  const [message, setMessage] = useState([]);
  const [isSuccess, setSuccess] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  // console.log(message);
  // console.log(isSuccess);

  const handleLogin = async e => {
    e.preventDefault();
    try {
      // setMessage();
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${'/login'}`,
        { username: userName, password: password }
      );

      setSuccess(res.data.success);
      setMessage([res.data.message]);
      console.log(res);

      // res.
    } catch (err) {
      if (err.response !== null) {
        // console.log(err.response);
        setSuccess(err.response.data.success);
        setMessage([err.response.data.message]);
        // console.log(err.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* EMAIL */}
      <FormControl id="text">
        <FormLabel>User Name</FormLabel>
        <Input
          type="text"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
      </FormControl>
      {/* PASSWORD */}
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        {/* LOGIN BUTTON */}
        <Button w="100%" my="4" type="submit">
          Login
        </Button>
        {message.length > 0 && <StatusAlert message={message} />}
        {/* status={status} */}
        {/* HELPER */}
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </form>
  );
};
