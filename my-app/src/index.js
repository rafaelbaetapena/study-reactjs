import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Welcome from './Welcome';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import Comment from './Comment'
import Clock from './Clock';
import ActionLink from './ActionLink';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
// import registerServiceWorker from './registerServiceWorker';
  
function App() {
    return (
      <div>
        <Toggle />
        <ActionLink />
        <Clock />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Editee" />
        <Clock />
        <LoggingButton />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();