const child_process = require('child_process');
const storage = require.main.require('./server/watcher-storage.js');

const episodePath = document.getElementById("episode-path");

const handleEpisodeInputChange = (event) => {
    const files = event.path[0].files;
    let vlcPathPromise;

    if (files.length > 0) {
        vlcPathPromise = storage.getVlcPath();
        vlcPathPromise.then((vlcPath) => {
            child_process.execFile(vlcPath, [files[0].path, 'vlc://quit'], () => {
                console.log('vlc terminated');
            });
            console.log(files[0]);
        });
    }
};

const init = () => {
    episodePath.addEventListener("change", handleEpisodeInputChange)
};

module.exports = {
    init
}