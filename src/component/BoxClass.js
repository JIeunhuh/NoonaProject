import React, { Component } from 'react';

class BoxClass extends Component {
  render() {
    const { title, item, res } = this.props;
    console.log(item);
    return (
      <div className='box' style={res === "WIN!" ? { borderColor: 'green' } : res === "Lose.." ? { borderColor: 'red' } : { borderColor: 'pink' }}>
        <div style={{ textAlign: 'center' }}>{title}</div>
        {item === null ? (<i className="nes-octocat animate"></i>) : (<img className="pic" src={item.img} alt='가위바위보' />)}
        <div style={{ fontWeight: 'normal', fontSize: '45px' }}>{item === null ? "Let's Play!" : res}</div>
      </div>
    );
  }
}

export default BoxClass;
