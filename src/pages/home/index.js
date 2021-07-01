import React from "react";
import './index.css';
import Welcome from '../../components/welcome';
import Clock from '../../components/clock';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  user = {
    firstName: '姜',
    lastName: '平凡'
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name={this.user.firstName + this.user.lastName}></Welcome>
        <Clock></Clock>
        <Link to='/work-list'>前往工作列表</Link>
      </header>
    )
  }
}