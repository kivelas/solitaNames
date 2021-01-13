import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Names from './names.json';

class Navigation extends React.Component {
  render(){
    return (
      <div>
        <button
          className="list"
          /*onClick={this.props.onClick}*/>
            List
          </button>
      </div>
    );
  }
}

class Content extends React.Component {
  render(){
    return (
      <div>
        <table border='2'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
            {Names.names.map((item, i) => (
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
}

//------------
//------------

ReactDOM.render(
  <Content />,
  document.getElementById('root')
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