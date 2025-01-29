import logo from './logo.svg';
import './App.css';
import Timeline from './component/timeline/Timeline';
// import { BrowserRouter } from "react-router-dom";

function App() {
  const basename = process.env.REACT_APP_HOMEPAGE;
  return (
    // <BrowserRouter basename={basename}>
      <div className="App">
        <Timeline></Timeline>
      </div>
    // </BrowserRouter>
  );
}

export default App;
