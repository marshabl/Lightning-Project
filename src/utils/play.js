const commands = require("./commands");

module.exports = {
  alias: function getAlias() {
    commands.getInfo({}).then(function(result) {
      console.log(result.alias);
      return result.alias;
    });
  }
};

// commands.getInfo({}).then(function(result) {
//   console.log(result.alias)
//   return (result.alias)
// });
