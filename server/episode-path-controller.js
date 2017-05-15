const readdir = require('recursive-readdir-sync');
const episodePath = document.getElementById("episode-path");

const handleEpisodeInputChange = (event) => {
    const filesInput = event.path[0].files;
    let files;

    if (filesInput.length > 0) {
        const filePath = filesInput[0].path;
        console.log(filePath);
        try {
            files = readdir(filePath);
        } catch (err) {
            if (err.errno === 34) {
                console.log('Path does not exist');
            } else {
                throw err;
            }
        }
    }

    console.log(files);
};

const init = () => {
    episodePath.addEventListener('change', handleEpisodeInputChange)
};

module.exports = {
    init
}