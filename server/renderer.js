// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

require.main.require('./server/vlc-path-controller.js').init();
require.main.require('./server/episode-path-controller.js').init();
