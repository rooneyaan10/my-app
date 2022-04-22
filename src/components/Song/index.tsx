import { Box, Flex, Image, Text, Spacer } from "@chakra-ui/react";

interface songInterface {
  uri: string;
  image: string;
  title: string;
  album: string;
  artists: string;
  duration: number;
  selectState: (uri: string) => void;
  isSelected: boolean;
}

const millisToMinutesAndSeconds = (millis: number) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = Math.floor((millis % 60000) / 1000);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const Song = ({
  uri,
  image,
  title,
  album,
  artists,
  duration,
  selectState,
  isSelected,
}: songInterface) => {
  return (
    <>
      <Box
        bgColor="#212121"
        borderRadius="md"
      >
        <Flex align="center">
          <Box>
            <Flex align="center">
              <Image
                src={image}
                alt="Album"
                boxSize="100px"
                borderRadius="md"
                data-testid="song-image"
              />
              <Box ml="2">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign="left"
                  data-testid="song-title"
                >
                  {title}
                </Text>
                <Text color="white" data-tesstid="song-album" textAlign="left">
                  {album}
                </Text>
                <Text color="white" textAlign="left">
                  {artists}
                </Text>
                <Text color="white" textAlign="left">
                  {millisToMinutesAndSeconds(duration)}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box
            as="button"
            borderColor="#1db954"
            fontWeight="semibold"
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            _hover={{ bg: '#1ed760' }}
            bg="#1db954"
            h="10"
            w="100"
            mr="5"
            color="black"
            onClick={() => {
              selectState(uri);
            }}
            data-testid="song-button"
          >
            {isSelected ? "Deselect" : "Select"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Song;
