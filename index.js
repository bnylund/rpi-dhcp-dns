var dhcp = require('dhcp');

let client = 1;

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
    dns: ['10.0.0.1'],
    hostname: function() { return 'rpi-dhcp-client' + client++ },
    broadcast: '10.255.255.255',
    server: '10.0.0.1'
});

s.on("error", (err) => {
    console.log("--- DHCP ERROR ---");
    console.log(err);
    console.log("--- END DHCP ERROR ---");
});

s.on("message", (msg) => {
    console.log("--- NEW DHCP MESSAGE ---");
    console.log(msg);
    console.log("--- END DHCP MESSAGE ---");
});

s.on('bound', (state) => {
    console.log(state);
})

s.on("listening", () => {
    console.log("dhcp listening!");
});

s.on("close", () => {
    console.log("dhcp server closed.");
});

s.listen(67, '0.0.0.0', () => {
    console.log("dhcp server started!");
});