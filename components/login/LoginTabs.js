import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { LoginPanel } from './LoginPanel';
import { RegisterPanel } from './RegisterPanel';

export const LoginTabs = () => {
  return (
    //isLazy for performance
    <Tabs variant="enclosed" isFitted overflow="none" defaultIndex={0} isLazy >
      <TabList>
        <Tab>Login</Tab>
        <Tab>Register</Tab>
      </TabList>
      <TabPanels >
        <TabPanel>
          {/* LOGIN */}
          <LoginPanel />
        </TabPanel>
        {/* REGISTER */}
        <TabPanel>
          <RegisterPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
