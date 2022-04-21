import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  const REDIRECT_URI = "https://spotify-gigih-kohl.vercel.app/";

  const handleLogout = () => {
    window.location.href = REDIRECT_URI;
  };

  return (
    <>
      <Box w="full" px={4} bgColor="black">
        <Flex alignItems="center" h={16}>
          <Text fontSize="xl" fontWeight="bold" ml={4}>
            Spotify Playlist Creator
          </Text>
          <Spacer ml="auto" />
          <Flex alignItems="center" pl={3}>
            <Button
              colorScheme="green"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
