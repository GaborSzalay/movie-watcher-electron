const storage = require.main.require('./server/watcher-storage.js');
const vlcTaskRunner = require.main.require('./server/vlc-task-runner.js');

const renderSeriesList = async () => {
    const actualSeriesList = document.getElementById('actual-series-list');
    const seriesList = await storage.getSeriesList();
    const vlcPath = await storage.getVlcPath();
    actualSeriesList.innerHTML = '<div>' + seriesList.name + '</div>';

    for (let index = 0; index < seriesList.series.length; index++) {
        const element = seriesList.series[index];
        const executionResult = await vlcTaskRunner.openVlc(element);
        
        if (executionResult.closedByUser) {
            return;
        }    
    }
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