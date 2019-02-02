// enter your ip of the pi here
const ip = 'http://192.168.55.17';
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
            args: ['-W', `${ip}:5001`, '-V', `${ip}:8081`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-all/openCV-server/server.py',
            args: ['-W', `${ip}:5001`, '-V', `${ip}:8081`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'motors',
            script: '/home/pi/trainbot-all/motor-controller/main.py',
            args: ['-W', `${ip}:5001`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-simulator',
            script: '/home/pi/trainbot-all/proximity-tester/app.js',
            args: [`--websocket_address=${ip}:5001`],
            autorestart: true,
            watch: false
        }
    ]
};
