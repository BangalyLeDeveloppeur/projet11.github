import React from "react";
import Nofees from "../components/nofree/Nofees";
import Feacture from "../components/feacture/Feature";
import iconChat from "../assets/images/icon-chat.png";
import iconMoney from "../assets/images/icon-money.png";
import iconSecurite from "../assets/images/icon-security.png";

const need = (
  <p>
    Need to talk to a representative? You can get in touch through our 24/7 chat
    or through a phone call in less than 5 minutes.
  </p>
);
const desMoney = (
  <p>The more you save with us, the higher your interest rate will be!</p>
);
const Security = (
  <p>
    We use top of the line encryption to make sure your data and money is always
    safe.
  </p>
);

const Home = () => {
  return (
    <div>
      <Nofees />
      <section className="Home-section">

      <Feacture
        title={"You are our #1 priority"}
        content={need}
        image={iconChat}
      />
      <Feacture
        title={"More savings means higher rates"}
        content={desMoney}
        image={iconMoney}
      />
      <Feacture
        title={"Security you can trust"}
        content={Security}
        image={iconSecurite}
      />
      </section>
    </div>
  );
};
export default Home;
