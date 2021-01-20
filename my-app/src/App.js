import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics'
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendsList';
import friends from './components/FriendList/friends.json';

import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'


function App() {
  return (
<div>
  <div>
    <h1>Social-profile </h1>
    <Profile 
    key={user.name}
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
  </div>
  <div>
    <h1>Statistics</h1>
    <Statistics 
    title="Upload stats" 
    statistics={statisticalData} />
  </div>
  <div>
    <h1>FriendList</h1>
    <FriendList friends={friends} />,
  </div>
  <div>
    <h1>Transactions history</h1>
    <TransactionHistory items={transactions} />
  </div>
</div>
  );
}

export default App;
