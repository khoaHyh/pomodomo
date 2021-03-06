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
  return (
    <Alert mt="3" rounded="5" status={'info'}>
      <AlertIcon />
      <AlertTitle>
        <AlertDescription fontSize="s">
          <UnorderedList id='message-list'>
            {message.map((item, index) => {
              return <ListItem key={`status${index}`}>{item.message}</ListItem>;
            })}
          </UnorderedList>
        </AlertDescription>
      </AlertTitle>
    </Alert>
  );
};
