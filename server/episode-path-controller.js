module.exports = (() => {
    const episodePath = document.getElementById("episode-path");

    const handleEpisodeInputChange = (event) => {
        const files = event.path[0].files;

        if (files.length > 0) {
            console.log(files[0]);
        }
    };

    const init = () => {
        episodePath.addEventListener("change", handleEpisodeInputChange)
    };

    return {
        init: init
    }
})();