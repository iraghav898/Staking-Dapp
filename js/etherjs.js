// etherjs.js
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      // Show address in the <p> tag
      document.getElementById("walletAddress").innerText = `Connected: ${account}`;

      // Optional: initialize provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log("Wallet connected:", account);
    } catch (error) {
      console.error("Connection error:", error);
    }
  } else {
    alert("MetaMask not detected. Please install it!");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("connectButton").addEventListener("click", connectWallet);
});


