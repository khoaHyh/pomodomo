import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { userValidation, registerUser } from '../authUtils';
import { StatusAlert } from './StatusAlert';

export const RegisterPanel = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState([]);

  const handleRegister = async e => {
    e.preventDefault();
    const authUser = await userValidation(password, userName);
    setMessage(authUser);
    if (authUser.length > 0) {
      setStatus('warning');
    }

    if (authUser.length < 1) {
      handlePOST();
    }
  };

  const handlePOST = async () => {
    setMessage([]);
    const createInfo = {
      username: userName,
      email: email,
      password: password,
    };

    try {
      //post the object to server
      const res = await registerUser(createInfo);

      setMessage([res.data]);
      setStatus('warning');
    } catch (err) {
      //set message to err.response.data
      setMessage([err.response.data]);
      setStatus('warning');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {/* USER NAME */}
      <FormControl id="userName">
        <FormLabel>User Name</FormLabel>
        <Input
          type="text"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
      </FormControl>
      {/* EMAIL */}
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          onChange={e => {
            setEmail(e.target.value);
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
        {/* MESSAGE ALERT */}
        {message.length > 0 && (
          <StatusAlert message={message} status={status} />
        )}

        {/* REGISTER BUTTON */}
        <Button w="100%" mt="4" type="submit">
          Register
        </Button>
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </form>
  );
};
