import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

export const LoginPanel = () => {
  const { message, setMessage } = useState('');

  const handleLogin = e => {
    e.preventdefault();
  };

  return (
    <form onSubmit={handleLogin}>
      {/* EMAIL */}
      <FormControl id="text">
        <FormLabel>User Name</FormLabel>
        <Input type="email" />
      </FormControl>
      {/* PASSWORD */}
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        {/* LOGIN BUTTON */}
        <Button w="100%" my="4" type="submit">
          Login
        </Button>
        {/* HELPER */}
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </form>
  );
};
