//document.getElementById("myBtn").addEventListener("click", displayDate)
const initWatcher = () => {
    let di = {};

    const define = (moduleName, module) => {
        di[moduleName] = module;
    };

    const require = (moduleName) => {
        return di[moduleName];
    };

    return {
        define: define,
        require: require
    }
};

const watcher = initWatcher();