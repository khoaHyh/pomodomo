import { Button, IconButton } from '@chakra-ui/button';
import { ArrowUpDownIcon } from '@chakra-ui/icons';

const SessionSwitcher = props => {
  return <IconButton onClick={props.switchSession} variant="ghost" icon={<ArrowUpDownIcon />}></IconButton>;
};

export default SessionSwitcher;
