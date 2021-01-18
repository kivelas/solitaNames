import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Names from './names.json';


function Navigation(props) {
  return (
    <button
      className="navigation"
      onClick={props.onClick}>
        {props.value}
      </button>
  );
}


class NavBar extends React.Component {
  
  renderNavigation(i){
    return (
      <Navigation
        value={this.props.buttons[i]}
        onClick={() => this.props.onClick(i)}
        />
    );
  }

  render(){
    return (
      <div>
        <div className="button-row">
          {this.renderNavigation(0)}
          {this.renderNavigation(1)}
          {this.renderNavigation(2)}
          {this.renderNavigation(3)}
        </div>
      </div>
    )
  }
}

class Results extends React.Component {
  
  render() {

    const index = this.props.indexOfClickedButton;

    if(index === 0){
      const orderedNames= Names.names.sort((b,a) => a.amount - b.amount);
      return (
        <div>
          <p>10 most popular male and 10 most popular female names organized by the amount:</p>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
              {orderedNames.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if(index === 1){
      const abcNames = Names.names.sort((a,b) => a.name.localeCompare(b.name));
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Names in alphabetical order</th>
              </tr>
              {abcNames.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if(index === 2){
      let sum = 0;
      const names = Names.names.sort((b,a) => a.amount - b.amount);
      sum = names.map(total => total.amount).reduce((acc,total) => total + acc);
      return (
        <div>
          <p>The total sum of the 10 most popular male and 10 most popular female names is <b>{sum}</b>.</p>
        </div>
      );  
    } else if(index === 3){
      return(
        <p>3 painettu</p>
      )
    }

    return(
      <p><b>Press a green button of your choice!</b></p>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfClickedButton: -1,
      history: [{
        buttons: ["List by popularity", "ABC", "Sum of names", "Search"],
      }]
    };
  }

  handleClick(i){
    this.setState({
      indexOfClickedButton: i,
    });
  }

  render(){

    const history = this.state.history;
    const current = history[history.length - 1];

    return (
      <div className="content">
        <div className="navigation">
          <NavBar
          buttons={current.buttons}
          onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="results">
          <Results {...this.state}/>
        </div>
      </div>
    )
  }
}

//------------
//------------

ReactDOM.render(
  <Content />,
  document.getElementById('app')
);
