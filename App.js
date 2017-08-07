import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    this.state = {
      playerTurn: 1
    };
  }

  onClick(e) {
    e.target.value
    if(this.state.playerTurn === 1) {
      this.setState(
        {playerTurn: 0}
      )
    } else this.setState(
      {playerTurn: 1}
    )
  }

  render() {
    return (
      <table onClick={onClick}>
        <tr>
          <td>
            a
          </td>
          <td>
            b
          </td>
          <td>
            c
          </td>
        <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        </tr>
        </tr>
      </table>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



module.export = App;
