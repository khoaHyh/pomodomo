import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/alert';
import { ListItem, UnorderedList } from '@chakra-ui/layout';
import { useRef } from 'react';

export const StatusAlert = ({ message, status }) => {
  console.log('passthru:', message);
  // status={status} 
  return (
    <Alert mt="3" rounded="5">
      <AlertIcon />
      <AlertTitle>
        {status === 'success'
          ? 'Your account has been made!'
          : 'Please fix the following:'}
        <AlertDescription fontSize="xs">
          <UnorderedList>
            {message.map((status, index) => {
              return (
                <ListItem key={`status${index}`}>{status.message}</ListItem>
              );
            })}
          </UnorderedList>
        </AlertDescription>
      </AlertTitle>
    </Alert>
  );
};
