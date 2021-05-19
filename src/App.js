import './App.css';
import CreateQuote from './components/CreateQuote';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateQuote/>
        <Quote/>
      </header>
    </div>
  );
}

export default App;
