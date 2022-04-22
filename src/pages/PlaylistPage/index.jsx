import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Song from "../../components/Song";
import Search from "../../components/Search";
import { retrieveSongs } from "../../api/axios";
import Form from "../../components/Form";
import { SimpleGrid, Box } from "@chakra-ui/react";

const PlaylistPage = () => {
  const token = useSelector((state) => state.token.value);
  const [searchSong, setSearchSong] = useState("");
  const [songData, setSongData] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [combineSongs, setCombineSongs] = useState([]);

  useEffect(() => {
    const handleCombineTracks = songData.map((song) => ({
      ...song,
      isSelected: selectedSongs.find((data) => data === song.uri),
    }));
    setCombineSongs(handleCombineTracks);
  }, [songData, selectedSongs]);

  const getSong = () => {
    retrieveSongs(searchSong, token)
      .then((response) => {
        setSongData(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelect = (uri) => {
    const selected = selectedSongs.find((song) => song === uri);
    selected
      ? setSelectedSongs(selectedSongs.filter((song) => song !== uri))
      : setSelectedSongs([...selectedSongs, uri]);
  };

  return (
    <>
      <Search getSong={getSong} setSearchSong={setSearchSong} />
      <Form songUris={selectedSongs} />
      <Box p="5">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="5" py="5">
          {combineSongs.map((song) => {
            const { uri, name, artists, album, duration_ms, isSelected } = song;
            return (
              <Song
                key={uri}
                uri={uri}
                image={album.images[0]?.url}
                title={name}
                artists={artists[0]?.name}
                album={album.name}
                duration={duration_ms}
                selectState={handleSelect}
                isSelected={isSelected}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PlaylistPage;
