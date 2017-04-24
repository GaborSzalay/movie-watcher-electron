const storage = require('electron-json-storage');

module.exports = (() => {

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

    return {
        setVlcPath: setVlcPath,
        getVlcPath: getVlcPath
    }
})();