// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();
import ReactDOM from 'react-dom';
import user from './Propfile/user.json';

function Profile(props) {
    const { avatar,username,tag,location,stats} = props
    return (
        <div class="profile">
  <div class="description">
    <img
                src={avatar}
      alt="User avatar"
      class="avatar"
    />
            <p class="name">{username}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
 }


ReactDOM.render(
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />, document.querySelector('#root'),
);
