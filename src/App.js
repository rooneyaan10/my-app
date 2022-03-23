import './App.css';
import Cover from './components/Cover';
import Content from './components/Content';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cover/>
        <Content/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
