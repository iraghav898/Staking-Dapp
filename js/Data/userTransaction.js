const userTransaction = JSON.parse(localStorage.getItem("transactions"));
const user = JSON.parse(localStorage.getItem("User"));

function generateCountDown() {
    var now = new Date().getDate();

    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    return minutes + "m" + seconds + "s";
}

const contractTransactionList = document.querySelector(".dataUserTransaction");
const userProfile = document.querySelector(".contract-user");

const userTransactionHistory = userTransaction.map((transaction,i)=>{
 return 
 
})

userProfile.innerHTML = userProfileHTML;
contractTransactionList.innerHTML = userTransactionHistory;