import "./App.css";
import { RenderShows } from "./utils/renderShows";
import { TVShowForm } from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>TV Shows</h1>
      <div className="content">
        <div className="section1">{RenderShows()}</div>
        <div className="section2">{TVShowForm()}</div>
      </div>
    </div>
  );
}

export default App;
