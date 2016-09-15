function init() {
    const node = document.getElementById('container');
    require.ensure(['./app'], function (require) {
        const { initApp } = require('./app');
        initApp(node);
    }, 'Counter');
    return {};
}
init();