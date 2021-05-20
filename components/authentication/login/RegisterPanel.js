import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { Button, ButtonGroup, toast, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import axios from 'axios';
import { userValidation } from '../PasswordValidation';

export const RegisterPanel = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [message, setMessage] = useState();

  const alertToast = useToast();
  const alertToastRef = useRef();

  // we got the messages now we just gotta add them to state
  const handleRegister = async e => {
    e.preventDefault();
    const authUser = await userValidation(password, userName)
    setMessage(()=>({message:authUser}))

    console.log(authUser)
    if (authUser.length < 1) {
      // console.log('Password and USER is good');

      const createInfo = {
        username: userName,
        email: email,
        password: password,
      };

      try {
        const res = await axios.post(
          'https://api.pomodomo.ca/register',
          createInfo
        );

        if (res.status === 201) {
          //set message to res.data
          console.log('created:', res.data);
        }
      } catch (err) {
        //set message to err.response.data

        console.log('TRY ERROR:', err.response.data);
      }
    } else {
      console.log('Please fix your password');
    }

    // const res = await axios.get('https://api.pomodomo.ca/');
  };

  const handleToast = () => {
    alertToastRef.current = alertToast({
      // map the erros then reset it
      title: 'yaes',
    });
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
        {/* REGISTER BUTTON */}
        <Button w="100%" my="4" type="submit">
          Register
        </Button>
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </form>
  );
};
