import Routes from "./Routes/Routes";
import TotalWorkOutProvider from "./store/TotalWorkOutProvider";

function App() {
  return (
    <div className="App">
      <TotalWorkOutProvider>
        <Routes />
      </TotalWorkOutProvider>
    </div>
  );
}

export default App;
