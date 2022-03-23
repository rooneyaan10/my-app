const Content = () => {
    return (
        <div className="playlist-container">
            <div className="playlist-item">
                <img
                    className="album-cover"
                    src="https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
                    alt="cover"
                />
                <div className="playlist-content">
                    <h2 className="playlist-artist">Joji</h2>
                    <h3 className="playlist-song">Afterthought - Nectar</h3>
                </div>
                <div className="playlist-action">
                    <button className="playlist-button">Select</button>
                </div>
            </div>
            <div className="playlist-item">
                <img
                    className="album-cover"
                    src="https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
                    alt="cover"
                />
                <div className="playlist-content">
                    <h2 className="playlist-artist">Joji</h2>
                    <h3 className="playlist-song">Ew - Nectar</h3>
                </div>
                <div className="playlist-action">
                    <button className="playlist-button">Select</button>
                </div>
            </div>
            <div className="playlist-item">
                <img
                    className="album-cover"
                    src="https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png"
                    alt="cover"
                />
                <div className="playlist-content">
                    <h2 className="playlist-artist">Joji</h2>
                    <h3 className="playlist-song">Normal People - Nectar</h3>
                </div>
                <div className="playlist-action">
                    <button className="playlist-button">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Content;
