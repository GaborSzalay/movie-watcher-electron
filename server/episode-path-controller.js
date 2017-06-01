const readdir = require('recursive-readdir-sync');
const episodePath = document.getElementById("episode-path");
const seriesName = document.getElementById("series-name");
const storage = require.main.require('./server/watcher-storage.js');

const handleEpisodeInputChange = async (event) => {
    const filesInput = event.path[0].files;
    let files;

    if (filesInput.length > 0) {
        const filePath = filesInput[0].path;
        try {
            files = readdir(filePath);
        } catch (err) {
            if (err.errno === 34) {
                console.log('Path does not exist');
            }
            throw err;
        }
    }

    if (!files) {
        return;
    }

    const movies = files.filter(file => {
        return file.includes('.avi') || file.includes('.mp4') || file.includes('.mkv');
    });
    await storage.setSeriesList({
        name: seriesName.value,
        series: movies
    });
    
    console.log(await storage.getSeriesList());
};

const init = () => {
    episodePath.addEventListener('change', handleEpisodeInputChange)
};

module.exports = {
    init
}