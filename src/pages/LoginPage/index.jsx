import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducer/slicer";
import url from "../../spotify/spotify";
import { Center, Box, Link } from "@chakra-ui/react";

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(getToken()));
  }, [dispatch]);

  const getToken = () => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");

    return accessToken;
  };

  return (
    <>
      <Center h="100vh">
        <Box
          p="3"
          bgColor="#1db954"
          borderRadius="md"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bg: "#1ed760" }}
        >
          <Link
            href={url}
            color="black"
            style={{ textDecoration: "none" }}
            fontWeight="semibold"
            fontSize="20px"
          >
            Login To Spotify
          </Link>
        </Box>
      </Center>
    </>
  );
};

export default LoginPage;
