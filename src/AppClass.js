import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
      comSelect: null,
      res: null,
      comRes: null
    };
    this.choice = {
      rock: {
        name: 'Rock',
        img: 'https://cdn-icons-png.flaticon.com/128/3562/3562093.png'
      },
      scissors: {
        name: 'Scissors',
        img: "https://cdn-icons-png.flaticon.com/128/7218/7218725.png"
      },
      paper: {
        name: 'Paper',
        img: "https://cdn-icons-png.flaticon.com/128/2717/2717361.png"
      }
    };
  }

  random() {
    const newChoice = Object.keys(this.choice);
    let ran = parseInt(Math.random() * newChoice.length);
    return this.choice[newChoice[ran]];
  }

  defeat(user, com) {
    if (user['name'] === com['name']) {
      return "tie !!";
    } else if (user.name === "Rock") return com.name === "Scissors" ? "WIN!" : "Lose..";
    else if (user.name === "Scissors") return com.name === "Paper" ? "WIN!" : "Lose..";
    else if (user.name === "Paper") return com.name === "Rock" ? "WIN!" : "Lose..";
  }

  comDefeat(user, com) {
    if (user['name'] === com['name']) {
      return "tie !!";
    } else if (com.name === "Rock") return user.name === "Scissors" ? "WIN!" : "Lose..";
    else if (com.name === "Scissors") return user.name === "Paper" ? "WIN!" : "Lose..";
    else if (com.name === "Paper") return user.name === "Rock" ? "WIN!" : "Lose..";
  }

  clickBtn = (selectChoice) => {
    this.setState({ select: this.choice[selectChoice] });
    let comChoice = this.random();
    this.setState({ comSelect: comChoice });
    let res = this.defeat(this.choice[selectChoice], comChoice);
    let comRes = this.comDefeat(this.choice[selectChoice], comChoice);
    this.setState({ res: res, comRes: comRes });
  }

  render() {
    const { select, comSelect, res, comRes } = this.state;
    return (
      <div>
        <div className="main">
          <BoxClass title="YOU" item={select} res={res} />
          <BoxClass title="COMPUTER" item={comSelect} res={comRes} />
        </div>
        <div className="main">
          <button className="nes-btn is-primary" onClick={() => this.clickBtn("rock")}>Rock</button>
          <button className="nes-btn is-warning" onClick={() => this.clickBtn("scissors")}>Scissors</button>
          <button className="nes-btn is-success" onClick={() => this.clickBtn("paper")}>Paper</button>
        </div>
      </div>
    );
  }
}

export default AppClass;
