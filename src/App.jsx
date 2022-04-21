import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  const token = useSelector((state) => state.token.value);

  return (
    <>
      <Box>
        <Router>
          {token ? <Navbar /> : ""}
          <Switch>
            <Route exact path="/">
              {!token ? <LoginPage /> : <Redirect to="/create-playlist" />}
            </Route>
            <Route path="/create-playlist">
              {!token ? <Redirect exact to="/" /> : <PlaylistPage />}
            </Route>
            <Route path="*"></Route>
          </Switch>
        </Router>
      </Box>
    </>
  );
}

export default App;
