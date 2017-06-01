const storage = require.main.require('./server/watcher-storage.js');

const renderSeriesList = async () => {
    const actualSeriesList = document.getElementById('actual-series-list');
    const seriesList = await storage.getSeriesList();
    actualSeriesList.innerHTML = '<div>' + seriesList.name + '</div>';
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