# Spotify Playlist Creator

Spotify Playlist Creator is a website that can help you to make a Playlist on your Spotify.

## Installation
Must install all these first:
- [git]
- [NodeJS]
- [npm]


After you've installed all the stuff above, run a few commands to get set up:

```bash
git clone https://github.com/rooneyaan10/my-app.git
cd my-app
npm run setup
```
If you are unable to get the setup script to work, run the following command:
```bash
npm install
```

## Usage
Set up your environment variable first
```bash
cp .env .env.local
```
Change the CLIENT_ID to your CLIENT_ID. How to get yout CLIENT_ID you can follow the instruction in [here].
Change the REDIRECT_URL to your deployment URL or http://localhost:3000/
```bash
REACT_APP_SPOTIFY_CLIENT_ID=YourClientId
REACT_APP_REDIRECT_URL=YourDeployURL
```
Open the project in your preferred IDE then type command below in the terminal.
```bash
npm start
```

## Features
- Integration with your Spotify® account.
- Find songs, artists, or albums.
- Create playlist.
- Select specific song.
- Show song data including title, artist, album, and duration


[npm]: <https://www.npmjs.com/>
[NodeJS]: <https://nodejs.org>
[git]: <https://git-scm.com/>
[here]:<https://developer.spotify.com/documentation/general/guides/authorization/app-settings/>
