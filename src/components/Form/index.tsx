import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { retrieveUserId, createPlaylist, pushSongs } from "../../api/axios";
import { InputGroup, Input, Center, Box } from "@chakra-ui/react";

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
      <Center>
        <Box w="full">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="playlist-box">
                <div className="form-title">
                  <label htmlFor="title" className="form-title-text"></label>
                  <InputGroup mb="5">
                    <Input
                      type="text"
                      className="form-title-input"
                      placeholder="Playlist Name"
                      name="title"
                      variant="filled"
                      value={form.title}
                      onChange={handleForm}
                    />
                  </InputGroup>
                </div>
                <div className="form-desc">
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
                </div>
                <div>
                  <Box
                    as="button"
                    borderColor='#1db954'
                    fontWeight='semibold'
                    h='10'
                    w='100%'
                    type="submit"
                    color="black"
                    bg="#1db954"
                    mt="5"
                  >
                    Create Playlist
                  </Box>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Form;
