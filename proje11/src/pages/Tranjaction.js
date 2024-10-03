import React from "react";
import Wellcom from "../components/wellcom/Wellcom";
import Account from "../components/account/Account";


const Tranjaction = () => {
  return (
    <div>
      <Wellcom />
      <Account title={"Argent Bank Checking (x8349)"} solde={"$2,082.79"} content={"Available Balance"}/>
    </div>
  );
};

export default Tranjaction;
