import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';


class RollDice extends Component {

  static defaultProps = {
    side: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props){
    super(props);
    this.state = {die1: 'one', die2: 'two', rolling: false}
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

    this.setState({ die1: newDie1, die2: newDie2, rolling: true })

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 750);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDiceContainer">
          <Die face={this.state.die1} rolling={this.state.rolling}/>
          <Die face={this.state.die2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    )
  }
}

export default RollDice;