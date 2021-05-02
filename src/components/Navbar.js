import { Box, Button, Flex, IconButton, Stack, Image } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'
export const Navbar = (props) => {

    const [isMobile] = useMediaQuery("(min-width:368px)")
    console.log(isMobile)
    return (

        <Flex w="100vw" bg='green.200' h="6vh" justify="center" align="center" box-shadow='xl'
            fontSize={['md', 'lg', 'xl', 'xl']}
            boxShadow='md'
            p={2}>
            <Stack isInline align='center' >
                <Image align='center' boxSize={['36px', '48px', '48px', '48px']} fallbackSrc='./images/tomato.png' />
                <Box fontWeight='semibold'>Pomodoro</Box>
            </Stack>
            <Flex w={['100vw', '100vw', '80vw', '80vw']} justify='end' align='center'>
                <Stack spacing='5' isInline align='center' >
                    <IconButton position='relative' icon={<SunIcon />}></IconButton>
                    <Button position='relative'>Login</Button>
                    <Button position='relative'> Sign Up</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}