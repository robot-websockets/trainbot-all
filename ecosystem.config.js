// enter your ip of the pi here
const localIpAddress = '192.168.0.14';
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
            args: [
                '-W',
                `${localIpAddress}:5001`,
                '-V',
                `${localIpAddress}:8081`
            ],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-all/openCV-server/server.py',
            args: [
                '-W',
                `${localIpAddress}:5001`,
                '-V',
                `${localIpAddress}:8081`
            ],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'motors',
            script: '/home/pi/trainbot-all/motor-controller/main.py',
            args: ['-S', `${localIpAddress}`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'proximity-sensor',
            script: '/home/pi/trainbot-all/proximity-sensor/distance.py',
            args: ['-S', `${localIpAddress}`],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};
