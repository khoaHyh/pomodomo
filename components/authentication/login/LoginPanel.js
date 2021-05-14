import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const LoginPanel = () => {
  return (
    <>
      {/* EMAIL */}
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      {/* PASSWORD */}
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        {/* LOGIN BUTTON */}
        <Button w="100%" my="4">
          Login
        </Button>
        {/* HELPER */}
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </>
  );
};
