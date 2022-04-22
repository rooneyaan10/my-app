import { Box, Center, InputGroup, Input } from "@chakra-ui/react";

interface searchInterface {
  setSearchSong: (value: string) => void;
  getSong: () => void;
}

const Search = ({ setSearchSong, getSong }: searchInterface) => {
  return (
    <>
      <Center>
        <Box w="sm">
          <InputGroup mt="100">
            <Input
              type="search"
              className="search-input"
              placeholder="Search artists, songs, or albums"
              variant="filled"
              aria-label="Search"
              onChange={(e) => setSearchSong(e.target.value)}
            />
            <Box
              as="button"
              borderColor="#1db954"
              fontWeight="semibold"
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              _hover={{ bg: '#1ed760' }}
              h="10"
              type="button"
              bg="#1db954"
              color="black"
              onClick={getSong}
            >
              Search
            </Box>
          </InputGroup>
        </Box>
      </Center>
    </>
  );
};

export default Search;
