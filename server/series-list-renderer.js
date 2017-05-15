const storage = require('electron-json-storage');

const renderSeriesList = () => {
    storage.getAll(function(error, data) {
        if (error) throw error;

        console.log(data);
    });
};

const init = () => {
    const navigation = document.getElementsByTagName('nav')[0];
    const navOptions = navigation.getElementsByTagName('a');
    for (var counter = 0; counter < navOptions.length; counter++) {
        if (navOptions[counter].getAttribute('href') === '#watch-series') {
            navOptions[counter].addEventListener('click', renderSeriesList);
        }
    }
};

module.exports = {
    init
}