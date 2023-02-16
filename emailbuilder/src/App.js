import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Header />
        </div>

        <div style={{display:'flex', direction:'row'}}>
          <div style={{ width: 'calc(100% - 471px)'}}>
            <Display />
          </div>
          <div>
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
