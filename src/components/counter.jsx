import React, { Component } from "react";
class Counter extends Component {
  onChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let element = (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}{" "}
          <form>
            <input placeholder="name" />
          </form>
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sml"
        >
          Increments
        </button>
        <form className="btn">
          <input
            type="number"
            placeholder="price"
            name="price"
            value={this.props.counter.price}
            onChange={e => {
              this.props.handlePrice({
                ...this.props.counter,
                price: parseFloat(e.target.value)
              });
            }}
          />
        </form>
        <h1 className="btn">
          {" "}
          {this.props.counter.value} X {this.props.counter.price}
        </h1>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
    return element;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
