import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
import UAFlag from "../../../public/assets/images/flag-ukraine.png";
import Image from 'next/image';
  
  const Logo = (props: any) => {
    return (
        <Image
        src={UAFlag}
        alt="Ukraine flag"
        height={40}
        width={40}
        placeholder="blur"
      />
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

  const Socials = () => (
    <Stack direction={'row'} spacing={6}>
    <SocialButton label={'Twitter'} href={'#'}>
      <FaTwitter />
    </SocialButton>
    <SocialButton label={'YouTube'} href={'#'}>
      <FaYoutube />
    </SocialButton>
    <SocialButton label={'Instagram'} href={'#'}>
      <FaInstagram />
    </SocialButton>
  </Stack>
  )

  const Newsletter = () => (
    <Stack align={'flex-start'}>
    <ListHeader>Stay up to date</ListHeader>
    <Stack direction={'row'}>
      <Input
        placeholder={'Your email address'}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        border={0}
        _focus={{
          bg: 'whiteAlpha.300',
        }}
      />
      <IconButton
        bg={useColorModeValue('green.400', 'green.800')}
        color={useColorModeValue('white', 'gray.800')}
        _hover={{
          bg: 'green.600',
        }}
        aria-label="Subscribe"
        icon={<BiMailSend />}
      />
    </Stack>
  </Stack>
  )
  
  export function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} /> <Text>Nocel dla Ukrainy</Text>
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Nocelg dla Ukrainy. All rights reserved
              </Text>

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Menu</ListHeader>
              <Link href={'/nowe-ogloszenie'}>Dodaj ogłoszenie</Link>
              <Link href={'/ogloszenia'}>Przeglądaj ogłoszenia</Link>
              
            </Stack>
            
          </SimpleGrid>
        </Container>
      </Box>
    );
  }