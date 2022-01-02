import user from './components/Profile/user.json';
import ProfilesList from './components/Profile/ProfilesList';
import StatisticsSection from './components/Statistics/StatisticsSection';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <div>
      <ProfilesList items={user} />
      <StatisticsSection title="Upload stats" />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

// ReactDOM.render(
//     <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//     />, document.querySelector('#root'),
// );
