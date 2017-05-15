const storage = require('electron-json-storage');

const setVlcPath = (value) => {
    storage.set('vlc-settings', value, (error) => {
        if (error) throw error;
    });
};

const getVlcPath = () => {
    return new Promise((resolve, reject) => {
        storage.get('vlc-settings', (error, data) => {
            if (error) throw error;

            if (Object.keys(data).length === 0 && data.constructor === Object) {
                reject();
            }

            resolve(data);
        });
    });
};

const getObject = (objectName) => {
    return new Promise((mainResolve, mainReject) => {
        const objectExists = new Promise((resolve, reject) => {
            storage.get(objectName, (error, data) => {
                if (error) throw error;

                if (Object.keys(data).length === 0 && data.constructor === Object) {
                    reject();
                }

                resolve(data);
            });
        });
        objectExists.then((data) => {
            mainResolve({
                objectName: objectName,
                data: data
            });
        }).catch(() => {
            new Promise((resolve, reject) => {
                storage.set(objectName, {}, (error) => {
                    if (error) throw error;
                    resolve();
                });
            }).then(() => {
                mainResolve({
                    objectName: objectName,
                    data: {}
                });
            });
        });
    });
};

const store = (object) => {
    return new Promise((resolve, reject) => {
        storage.set(object.objectName, object.data, (error) => {
            if (error) throw error;
            resolve();
        });
    });
};

module.exports = {
    setVlcPath,
    getVlcPath,
    getObject,
    store
}