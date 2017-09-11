import React from 'react';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.findUser = this.findUser.bind(this);
    this.assignName = this.assignName.bind(this);
  }

  handleInput(e) {
    this.setState( {input: e.currentTarget.value} );
  }

  findUser() {
    const matches = [];
    const names = this.props.names;

    if (this.state.input.length === 0) {
      return [];
    }

    names.forEach( (name) => {
      const partial = name.slice(0, this.state.input.length);
      if (partial.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(name);
      }
    });

    if(matches.length === 0) {
      matches.push('no matches found');
    }

    return matches;
  }

  assignName(e) {
    const name = e.currentTarget.innerText;
    this.setState({input: name});
  }


  render() {
    const names = this.props.names;
    console.log(this);
    return(
    <div className="autocomplete">
      <input
        value={ this.state.input }
        onChange={ this.handleInput }
        placeholder = 'search...' />
      <ul>
        {
          this.findUser().map((name, idx) => (<li key={idx}
              onClick={this.assignName} >{name}</li> ))
        }
      </ul>
    </div>
    );
  }
}

// window.AutoComplete = AutoComplete;
