module.exports = (() => {
    const vlcPathElement = document.getElementById("vlc-path");
    let vlcPath;

    const handleVlcInputChange = (event) => {
        const files = event.path[0].files;

        if (files.length > 0) {
            vlcPath = files[0].path;
        }
    };

    const getVlcPath = () => {
        return vlcPath;
    };

    const init = () => {
        vlcPathElement.addEventListener("change", handleVlcInputChange)
    };

    return {
        getVlcPath: getVlcPath,
        init: init
    }
})();