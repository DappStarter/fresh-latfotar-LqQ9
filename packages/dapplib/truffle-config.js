require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strategy cost spice social inner argue metal genius'; 
let testAccounts = [
"0xa864635835bc658a0e35588bf37c02c45a58ba2484c418082ba66a69168ce5d3",
"0xb04a5e25ab6dec8580f8baf48967ddde993fb166f2b30356f45752c89e95c138",
"0x10112ef9ee1aa7c426720e6a88967dc67be42d5c7fb69fe9e2fd588ac83f5719",
"0x250d1fa8852acbf87e41c0c35885f3a8df0b8f91544b07756992ff7c0a6f716e",
"0x3c316d4164e3c887e6b9f080c0b3840c3a1832342d6d0068f17d10b86e914c07",
"0xf309177337bc226e5eef7767dfd96ffb6c5d29770af65eea45570e42129f0d71",
"0x025f639c098fdcfb4c3c548d616c04e649fb71cb06ba10ea93fadffc13da28a4",
"0xa6fd801a63bba85c9fe81309a2e3616318eccf873968b4a680e31f75284bb2d8",
"0x01a6d3aa3626a79c111eda9c107fc06c877923214dd6ecb15341bfaadb96f662",
"0xc9be18bddc1c37e2ba5e0f2da7d3ce84465ad1ad326acbdc647c42db3f3ad8a6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


