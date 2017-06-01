const storage = require('electron-json-storage');

const removeObject = (objectName, value) => {
    return new Promise((resolve, reject) => {
        storage.remove(objectName, function(error) {
            if (error) throw error;
            resolve();
        });
    });
};

const setObject = (objectName, value) => {
    return new Promise((resolve, reject) => {
        storage.set(objectName, value, (error) => {
            if (error) throw error;
            resolve();
        });
    })
};

const updateObject = async (objectName, value) => {
    await removeObject(objectName, value);
    await setObject(objectName, value);
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

const setVlcPath = async (value) => {
    await updateObject('vlc-settings', value);
};

const getVlcPath = async () => {
    return await getObject('vlc-settings');
};

const setSeriesList = async (value) => {
    await updateObject('series-list', value);
};

const getSeriesList = async () => {
    return await getObject('series-list');
};

module.exports = {
    setVlcPath,
    getVlcPath,
    setSeriesList,
    getSeriesList
}