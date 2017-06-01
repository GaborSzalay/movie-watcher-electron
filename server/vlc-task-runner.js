const storage = require.main.require('./server/watcher-storage.js');
const child_process = require('child_process');

const openVlc = async (element) => {
    const vlcPath = await storage.getVlcPath();

    return new Promise((resolve, reject) => {
        child_process.execFile(vlcPath, [element, 'vlc://quit'], (arg1, arg2, vlcResponse) => {
            const response = {};

            if (vlcResponse.includes("command `quit")) {
                console.log('vlc terminated by quit');
            } else {
                console.log('vlc terminated by you');
                response.closedByUser = true;
            }
            resolve(response);
        });
    });
};

module.exports = {
    openVlc
}