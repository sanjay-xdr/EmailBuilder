import logo from './logo.svg';
import './App.css';
import { ActionBar } from './components/actionbar';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header />
        </div>
        <div style={{ "width": "50%" }}>
          <ActionBar />
        </div>
      </div>z
    </div>
  );
}

export default App;
