import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.800')}
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

export default function Footer() {
  return (
    <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
        <Box bg={'grey'} textAlign='left' color={'black'} padding='5'>
            <p>
                <Heading size={'md'}>
                    Amazing offers available on nearbuy
                </Heading>
                nearbuy helps you discover the best things to do, eat and buy – wherever you are! Make every day awesome with nearbuy. Dine at the finest restaurants, relax at the best spas, pamper yourself with exciting wellness and shopping offers or just explore your city intimately… you will always find a lot more to do with nearbuy. From tattoo parlors to music concerts, movie tickets to theme parks, everything you want is now within reach. Don't stop yet! Take it wherever you go with the nearbuy mobile app. Based on your location and preference, our smart search engine will suggest new things to explore every time you open the app. What's more, with offers on everything around you... you are sure to try something new every time.
            </p>
            <Stack ml={'80%'} direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/nearbuy'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.facebook.com/nearbuy'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/nearbuy/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Box>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <Link href='https://play.google.com/store/apps/details?id=com.nearbuy.nearbuymobile&hl=en&pid=Web%20App%20Download&c=Home%20Page%20Footer'>
                <Image src='https://static.vecteezy.com/system/resources/previews/002/520/836/original/download-apps-button-google-play-and-app-store-vector.jpg'/>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© Copyright © nearbuy.com India Private Limited. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/nearbuy'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.facebook.com/nearbuy'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/nearbuy/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}