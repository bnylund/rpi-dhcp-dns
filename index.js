var dhcp = require('dhcp');

var s = dhcp.createServer({
    range: [
        "10.0.0.5", "10.255.255.254"
    ],
    forceOptions: ['hostname'],
    randomIP: true,
    static: {
        "24:4B:FE:55:76:FD": "10.0.0.2",
    },
    netmask: '255.0.0.0',
    router: [],
    dns: ['10.0.0.1'],
    hostname: 'rpi',
    broadcast: '10.255.255.255',
    server: '10.0.0.1'
});

s.listen(null, '10.0.0.1', () => {
    console.log("dhcp server started!");
});