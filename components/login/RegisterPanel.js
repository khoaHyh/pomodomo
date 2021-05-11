import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';

export const RegisterPanel = () => {
  return (
    <>
    <Stack isInline>
      <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
    </Stack>
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
