module.exports = {
    apps: [
        {
            name: 'main-server',
            script: '/home/pi/trainbot-all/main-server/app.js',
            autorestart: true,
            watch: false
        },
        {
            name: 'barcode-server',
            script: '/home/pi/trainbot-all/barcode-server/server.py',
            args: ['-W', '127.0.0.0:5001', '-V', '127.0.0.0:8081'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-all/openCV-server/server.py',
            args: ['-W', '127.0.0.0:5001', '-V', '127.0.0.0:8081'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'motors',
            script: '/home/pi/trainbot-all/motor-controller/main.py',
            args: ['-W', '127.0.0.0:5001'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-simulator',
            script: '/home/pi/trainbot-all/proximity-tester/app.js',
            args: [`--websocket_address=127.0.0.0:5001`],
            autorestart: true,
            watch: false
        }
    ]
};
