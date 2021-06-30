import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  timerID = null;

  componentDidMount() {
    console.log('我是生命周期挂载完成');
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    console.log('我是生命周期卸载方法');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => {
      return {
        date: new Date()
      }
    });
  }

  render() {
    return <h2>现在北京时间：{this.state.date.toLocaleTimeString()}.</h2>
  }
}