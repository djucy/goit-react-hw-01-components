import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import StatisticsSection from './components/Statistics/StatisticsSection';

export default function App() {
    return <div>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    <StatisticsSection/>
        {/* <StatisticsList items={ data}/> */}
    </div>
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