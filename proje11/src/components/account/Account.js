import React from 'react';

const Account = ({title,content,solde}) => {
    return (
        <div className='wellcom'>
           <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">{title}</h3>
          <p class="account-amount">{solde}</p>
          <p class="account-amount-description">{content}</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section> 
        </div>
    );
};

export default Account;