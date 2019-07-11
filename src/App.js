import React, { Component } from "react";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    index: 2,
    counters: [{ id: 1, value: 0, price: 0 }]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    let counters = [...this.state.counters];
    const newcounter = [{ id: this.state.index, value: 0, price: 0 }];

    counters = counters.concat(newcounter);
    this.setState({ counters });
    this.setState(state => {
      index: state.index++;
    });
  };

  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      c.price = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handelPrice = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[counter.id - 1] = counter;
    console.log(counters[index]);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Counters
            onReset={this.handelReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            handlePrice={this.handelPrice}
            onAdd={this.handleAdd}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
