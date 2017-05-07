const path = require('path');

const episodePath = document.getElementById("episode-path");
const rootDirectory = document.getElementById("root-directory");

const getDir = (filePath) => {
    return path.dirname(filePath.toString());
}

const getPossibleDirs = (filePath, _directories) => {
    const directories = _directories ? _directories : [];
    const currentDirectory = getDir(filePath);

    if (filePath !== currentDirectory) {
        directories.push(currentDirectory);
        getPossibleDirs(currentDirectory, directories);
    }
    return directories;
}

const handleEpisodeInputChange = (event) => {
    const files = event.path[0].files;
    let vlcPathPromise;

    if (files.length > 0) {
        const filePath = files[0].path;
        let options = '';
        getPossibleDirs(filePath).forEach((directory, index) => {
            options = options.concat(`<label><input type="radio" name="option" value="${index}">${directory}</label>`);
        });
        rootDirectory.innerHTML = options;
    }
};

const init = () => {
    episodePath.addEventListener("change", handleEpisodeInputChange)
};

module.exports = {
    init
}