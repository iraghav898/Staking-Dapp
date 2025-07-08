const _NETWORK_ID = 80001;
let SELECT_CONTRACT = {};

SELECT_CONTRACT[_NETWORK_ID] = {
    network_name: "Polygon Mumbai",
    explorer_url: "https://mumbai.polygonscan.com/",
    STACKING: {
        sevenDays: {
            address: "0x511ABD58649fjdkKA434KLJRKL5J4LK4J3KL",
        },
        tenDays: {
            address: "0x4J12LKfjVJ4KLJ5LkdKJLVPCC45ONVU24FJK",

        },
        thirtyTwoDays: {
            address: "0xfjakld49132jaflkdjf930f0934D0923JDFD",
        },
        ninetyDays: {
            address: "0xfklj4j4k3j4kj3kj43kjjKJK343KJ4J4JJK3",
        },
        abi: [],
        },
        TOKEN: {
         symbol: "TBC",
         address: "0x4j3klj4l13jk4jk33j4k3JK45REW8R999",
         abi: [],
        },
    };
 /* countdown global */
 let countDownGlobal;
/*wallet connection */
 let web3;

 let oContractToken;

 let contractCall = "sevenDays";

 let currentAddress;

 let web3Main = new web3("https://rpc.ankr.com/polygon_mumbai");

 //create an instance of Notyf
 var notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "bottom"},
 });


