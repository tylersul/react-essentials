import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';
class RollDice extends Component {
  static defaultProps = {
    side: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props){
    super(props);
    this.state = {die1: 'one', die2: 'two'}
    // Without this line, React doesn't know the roll prop
    this.roll = this.roll.bind(this);
  }

  roll(){
    const newDie1 = this.props.side[
      Math.floor(Math.random() * this.props.side.length)
    ];

    const newDie2 = this.props.side[
      Math.floor(Math.random() * this.props.side.length)
    ];

    this.setState({ die1: newDie1, die2: newDie2 })
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDiceContainer">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}

export default RollDice;