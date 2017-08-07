import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    this.state = {
      playerTurn: 1
    };
  }
  render() {
    return (
      <table>
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
