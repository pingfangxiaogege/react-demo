import logo from '../logo.svg';
import './App.css';
import Welcome from '../components/welcome';
import Clock from '../components/clock';

function App() {
  const user = {
    firstName: '姜',
    lastName: '平凡'
  }
  function goToWorkList() {
    console.log('123')
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name={user.firstName + user.lastName}></Welcome>
        <Clock></Clock>
        <button onClick={goToWorkList}>前往今日工作安排</button>
      </header>
    </div>
  );
}

export default App;
