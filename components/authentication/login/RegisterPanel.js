import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const RegisterPanel = () => {
  return (
    <>
      <Stack isInline>
        {/* FIRST NAME */}
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* LAST NAME */}
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
      </Stack>
      {/* EMAIL */}
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      {/* PASSWORD */}
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        {/* REGISTER BUTTON */}
        <Button w="100%" my="4">
          Register
        </Button>

        <FormHelperText>
          We'll never share your email or password.
        </FormHelperText>
      </FormControl>
    </>
  );
};
