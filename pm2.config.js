const path = require('path');

const script = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    apps: [
        {
            name: 'ox-apollo-server',
            script,
            instances: 1,
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'staging',
            },
        },
    ],
};
