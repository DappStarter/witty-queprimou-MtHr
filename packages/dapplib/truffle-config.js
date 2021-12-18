require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strike rival noise atom harvest hidden tail gasp'; 
let testAccounts = [
"0x9484fe91ca453a5ffb02427fc1761eb5fcf3cf60bf596d860bd35fb574c2ce86",
"0x7ca9afa1ed82da641e201132636ad5cdd4c87241628240ea4fa1a01914fdfbbd",
"0xea2cd025b9c5dd42f91dab300a90b0efa263747654fd2f7b8241d97247a9da1a",
"0xdd75a483c6a4cdfe6482e4d9e5c8399c6195e7ae745b9649339f9fea358b1e05",
"0x2e8a5af7fa32340da96115032ccfab067995d8e59ac4a295a50412d49d5aac8c",
"0x00adab30a00ae8b782c7d68577afc0e022116bf261e6b6e3bf81bb2f9b3c11cb",
"0xc2251b3ce1036183ecbaeb26c32990ca8756207fb6a75d459f8cd8d8f5b7b54c",
"0x6dd294ff7d353dc75a49c407366ce03124f1bfe1a860b63b7434082cfe348aac",
"0x2b2331d21dda70591ca9b497d9f91b68675edb910a56f187129814cfcc7991cd",
"0xa29af6b3f31aec022acaa91ac76424ceef56e36c01f76c2f4cace7afcde1d118"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

