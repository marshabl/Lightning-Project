const api = require("./api");

module.exports = {
  getInfo: async function getInfo() {
    let lightning = await api.connect({
      lndHost: "192.168.7.207",
      lndPort: 10009,
      certPath: "/Users/blairmarshall/tls.cert",
      macaroonPath: "/Users/blairmarshall/admin.macaroon"
    });
    lightning.getInfo({}).then(res => {
      console.log(res);
      return res;
    });
  }
};
