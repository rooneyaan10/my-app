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

function App() {
  const token = useSelector((state) => state.token.value);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {!token ? <LoginPage /> : <Redirect to="/create-playlist" />}
          </Route>
          <Route path="/create-playlist">
            <Navbar />
            <PlaylistPage />
          </Route>
          <Route path="*">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
