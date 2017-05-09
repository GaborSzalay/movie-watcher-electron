const episodePath = document.getElementById("episode-path");

const handleEpisodeInputChange = (event) => {
    const files = event.path[0].files;
    let vlcPathPromise;

    if (files.length > 0) {
        const filePath = files[0].path;
        console.log(filePath);
    }
};

const init = () => {
    episodePath.addEventListener('change', handleEpisodeInputChange)
};

module.exports = {
    init
}