import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  TotalPrice = () => {
    let total = 0;
    this.props.counters.map(
      counter => (total += counter.value * counter.price)
    );

    return total;
  };
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-2"
        >
          Add
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            handlePrice={this.props.handlePrice}
            counter={counter}
          />
        ))}
        <h3>Total Price : {this.TotalPrice()}</h3>
      </div>
    );
  }
}

export default Counters;
