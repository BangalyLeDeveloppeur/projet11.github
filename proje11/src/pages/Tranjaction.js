import React from "react";
import Wellcom from "../components/wellcom/Wellcom";
import Account from "../components/account/Account";


const Tranjaction = () => {
  return (
    <div>
      <Wellcom />
      <Account title={"Argent Bank Checking (x8349)"} solde={"$2,082.79"} content={"Available Balance"}/>
      <Account title={"Argent Bank Savings (x6712)"} solde={"$10,928.42"} content={"Available Balance"}/>
      <Account title={"Argent Bank Credit Card (x8349)"} solde={"$184.30"} content={"Available Balance"}/>
    </div>
  );
};

export default Tranjaction;
