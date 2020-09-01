import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friendlist/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './components/Transactions/transactions.json';

function App() {

   return (
      <Wrapper>
         <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
         />
         <Statistics
            title="Upload stats"
            statisticalItems={statisticalData}
         />

         <FriendList
            friends={friends}
         />

         <TransactionHistory transactions={transactions} />
      </Wrapper>
   );
}

export default App;
