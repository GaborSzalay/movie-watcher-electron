const storage = require.main.require('./server/watcher-storage.js');

module.exports = (() => {
    const vlcPathElement = document.getElementById("vlc-path");
    const vlcPathContainer = document.getElementById("vlc-path-container");

    const checkExistingVlcPath = () => {
        const vlcPathPromise = storage.getVlcPath();

        vlcPathPromise.then((vlcPath) => {
            vlcPathContainer.textContent = vlcPath;
        });
    };

    const handleVlcInputChange = (event) => {
        const files = event.path[0].files;

        if (files.length > 0) {
            vlcPathContainer.textContent = files[0].path;
            storage.setVlcPath(files[0].path);
        }
    };

    const init = () => {
        checkExistingVlcPath();
        vlcPathElement.addEventListener("change", handleVlcInputChange);
    };

    return {
        init: init
    }
})();