import Routes from "./Routes/Routes";
import TotalWorkOutProvider from "./store/TotalWorkOutProvider";

function App() {
  return (
    <TotalWorkOutProvider>
      <Routes />
    </TotalWorkOutProvider>
  );
}

export default App;
