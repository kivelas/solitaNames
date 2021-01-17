import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Names from './names.json';

/*class Navigation extends React.Component {
  listNames(){
    return (
      <div className="results">
          <Results/>
      </div>
    )
  }
 
  render(){
    return (
      <div>
        <button
          className="list"
          onClick={listNames}>
            List
          </button>
      </div>
    );
  }
}
*/
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
  
  listNames() {
  
    const orderedNames= Names.names.sort((b,a) => a.amount - b.amount);
    return (
        <div>
          <table border='2'>
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
  }

  abcNames() {
    const abcNames = Names.names.sort((a,b) => a.name.localeCompare(b.name));
    return (
        <div>
          <table border='2'>
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
  }

  sum(){
    let sum = 0;
    const names = Names.names.sort((b,a) => a.amount - b.amount);
    sum = names.map(total => total.amount).reduce((acc,total) => total + acc);
    return (
      <div>
        <p>The total sum of the 10 most popular male and female names is <b>{sum}</b>.</p>
      </div>
    );
  }

  render(){
    return (
      <div className="results">
        {this.listNames()}
      </div>
    )
    /*
    const clickedItem = this.props.indexOfClickedButton;
    return(clickedItem);*/
    //if(clickedItem == 0){
/*
    const orderedNames= Names.names.sort((b,a) => a.amount - b.amount);
  
    return (
      <div>
        <table border='2'>
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
    );*/
    //}
    return(
      <p>painoit muuta</p>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfClickedButton: 0,
      history: [{
        buttons: ["List by popularity", "ABC", "Sum of names", "Search"],
        //buttons: Array(4).fill(null)
      }]
    };
  }

  handleClick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    const buttons = current.buttons.slice();
    
    this.setState({
      history: history.concat([{
        buttons: buttons
      }]),
      indexOfClickedButton: buttons[i],
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
          <Results/>
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
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/