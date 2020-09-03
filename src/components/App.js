import React from 'react';

import Wrapper from './Wrapper/Wrapper';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

function App() {

   return (
      <Wrapper>
         <Profile {...user} />
         <Statistics
            title="Upload stats"
            statisticalItems={statisticalData} />

         <FriendList friends={friends} />

         <TransactionHistory transactions={transactions} />
      </Wrapper>
   );
}

export default App;
