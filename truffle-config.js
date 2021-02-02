require ('babel-register');
require ('babel-polyfill');
require ('dotenv').config();


module.exports = {

  networks: {
    development :{
      host:"127.0.0.1",
      port : 7545,
      network_id: '*'
    },
  },
  contracts_directory : './src/contracts/',
  contracts_build_directory : './src/abi/',

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      optimizer : {
        enabled:true,
        runs :200
      }
    }
  }
};
