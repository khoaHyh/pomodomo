import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/alert';
import { ListItem, UnorderedList } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';

// Problem:
// Component loads everytime a user types anything
// Goal: Only updates on submit...
// How: componentdidmount lifecycle...
export const StatusAlert = ({ message, status }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      setAlertMessage(message);
      setAlertStatus(status);
    }
    return () => {
      isMounted = true;
    };
  }, []);
  return (
    <Alert mt="3" rounded="5" status={alertStatus||"warning"}>
      <AlertIcon />
      <AlertTitle>
         Please check the following:
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
