import Account from "../components/account/Account";
import Welcome from "../components/welcome/Welcome";



const Transaction = () => {
 
  return (
    <div>
      <Welcome />
      <Account
        title={"Argent Bank Checking (x8349)"}
        solde={"$2,082.79"}
        content={"Available Balance"}
      />
      <Account
        title={"Argent Bank Savings (x6712)"}
        solde={"$10,928.42"}
        content={"Available Balance"}
      />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        solde={"$184.30"}
        content={"Available Balance"}
      />
    </div>
  );
};

export default Transaction;
