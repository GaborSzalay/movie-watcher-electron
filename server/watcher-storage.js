const storage = require('electron-json-storage');

const setObject = (objectName, value) => {
    storage.remove(objectName, function(error) {
        if (error) throw error;
    });

    storage.set(objectName, value, (error) => {
        if (error) throw error;
    });
};

const getObject = (objectName) => {
    return new Promise((resolve, reject) => {
        storage.get(objectName, (error, data) => {
            if (error) throw error;

            if (Object.keys(data).length === 0 && data.constructor === Object) {
                reject();
            }

            resolve(data);
        });
    });
};

const setVlcPath = (value) => {
    setObject('vlc-settings', value);
};

const getVlcPath = () => {
    return getObject('vlc-settings');
};

const setSeriesList = (value) => {
    setObject('series-list', value);
};

const getSeriesList = () => {
    return getObject('series-list');
};

module.exports = {
    setVlcPath,
    getVlcPath,
    setSeriesList,
    getSeriesList
}