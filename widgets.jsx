import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';

const Names = [
  'Fred',
  'Moe',
  'Larry',
  'Curly',
  'John',
  'Sally',
  'Jessica',
  'Xander'
];

class Root extends React.Component {
  render() {
    return(
      <div>
        React is working
        <Clock/>
        <Weather/>
        <AutoComplete names={Names}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
