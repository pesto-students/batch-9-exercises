/* esling-disable */
import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.submit = this.submit.bind(this);
  }

  submit(input) {
    this.setState((prevState) => {list: [...prevState.list, input.target.value]});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ list: event.target.value });
          }}
        />
        <button
          type="button"
          onClick={this.submit}
        >
          Add
        </button>
        <ul>
          {this.state.list}
        </ul>
      </div>
    );
  }
}

export default GroceryList;
