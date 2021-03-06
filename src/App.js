import logo from './logo.svg';
import './App.css';
import Message from './components/message/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACT <code>deployment</code> example :D
        </p>
        <p>
          <Message />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit react's official page
        </a>
      </header>
    </div>
  );
}

export default App;
