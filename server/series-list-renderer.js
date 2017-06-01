const storage = require.main.require('./server/watcher-storage.js');
const child_process = require('child_process');

const renderSeriesList = async () => {
    const actualSeriesList = document.getElementById('actual-series-list');
    const seriesList = await storage.getSeriesList();
    const vlcPath = await storage.getVlcPath();
    actualSeriesList.innerHTML = '<div>' + seriesList.name + '</div>';

    child_process.execFile(vlcPath, [seriesList.series[0], 'vlc://quit'], (arg1, arg2, vlcResponse) => {
        if (vlcResponse.includes("command `quit")) {
            console.log('vlc terminated by quit');
        } else {
            console.log('vlc terminated by you');
        }
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