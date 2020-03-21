let ConfigParser = require("./configparser");
const util = require('util')

const conf = new ConfigParser({
    strict: false
});
conf.read("test.conf");

conf.addSection("Peer", {
    test: "lol"
});

conf.write("test2.conf");

console.log(conf.get("Peer", "test", null, 1));


console.log(util.inspect(conf, {showHidden: false, depth: null}))
