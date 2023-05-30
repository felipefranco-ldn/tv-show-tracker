import "./App.css";
import { RenderShows } from "./utils/renderShows";
import { TVShowForm } from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>TV Shows</h1>
      <div className="content">
        {/* // May 5th - Use meaningul names like Shows and Form  */}
        <div className="section1">{RenderShows()}</div>
        <div className="section2">{TVShowForm()}</div>
      </div>
    </div>
  );
}

export default App;

// May 5th - UI alignemnet can be better 
// updateShows not working 
// There should also be an edit option to edit shows