import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { retrieveUserId, createPlaylist, pushSongs } from "../../api/axios";
import {
  FormControl,
  Input,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";

interface selectedInterface {
  uri: string;
}

interface songUrisInterface {
  songUris: selectedInterface["uri"];
}

const Form = ({ songUris }: songUrisInterface) => {
  const token = useSelector((state: any) => state.token.value);
  const [playlistId, setPlaylistId] = useState("");
  const [userId, setUserId] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const getUserId = () => {
      retrieveUserId(token)
        .then((response) => {
          setUserId(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const addSongs = () => {
      pushSongs(playlistId, songUris, token)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (playlistId) {
      addSongs();
    }
    getUserId();
  }, [playlistId, songUris, token]);

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.title.length > 10) {
      createPlaylist(userId, form.title, form.description, token)
        .then((response) => {
          setPlaylistId(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
      setForm({ title: "", description: "" });
      alert("Playlist created!");
    } else {
      alert("Playlist title must be at least 10 characters long");
    }
  };

  return (
    <>
      <Text mt='10' mb='auto' fontSize='50px'>Create a Playlist</Text>
      <Text>Hint: Select your songs first</Text>
      <Center>
        <Box w="50%" mt="10" mb="10">
          <form onSubmit={handleSubmit}>
            <FormControl mb="5">
                <Input
                  type="text"
                  className="form-title-input"
                  placeholder="Playlist Name"
                  name="title"
                  variant="filled"
                  value={form.title}
                  onChange={handleForm}
                />
            </FormControl>
            <FormControl>
              <label htmlFor="title" className="form-desc-text"></label>
              <Input
                type="text"
                className="form-desc-input"
                placeholder="Playlist Description"
                name="description"
                variant="filled"
                value={form.description}
                onChange={handleForm}
              />
            </FormControl>
            <Box
              as="button"
              borderColor="#1db954"
              fontWeight="semibold"
              h="10"
              w="50%"
              type="submit"
              color="black"
              bg="#1db954"
              mt="5"
            >
              Create Playlist
            </Box>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Form;
