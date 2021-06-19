import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/alert';
import { ListItem, UnorderedList } from '@chakra-ui/layout';

// Problem:
// Component loads everytime a user types anything
// Goal: Only updates on submit...
// How: Didcomponentmount lifecycle...
export const StatusAlert = ({ message, status = 'warning' }) => {
  console.log('passthru:', message);
  return (
    <Alert mt="3" rounded="5">
      <AlertIcon />
      <AlertTitle>
        {message === 'success'
          ? 'Your account has been made!'
          : 'Please fix the following:'}
        <AlertDescription fontSize="xs">
          <UnorderedList>
            {message.map((item, index) => {
              return <ListItem key={`status${index}`}>{item.message}</ListItem>;
            })}
          </UnorderedList>
        </AlertDescription>
      </AlertTitle>
    </Alert>
  );
};
