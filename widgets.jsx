import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';


class Root extends React.Component {
  render() {
    return(
      <div>
        React is working
        <Clock/>
        <Weather/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
