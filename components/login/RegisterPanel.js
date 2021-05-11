import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

export const RegisterPanel = () => {
  return (
    <>
    <FormControl id="fullName">
        <FormLabel>Full Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </>
  );
};
