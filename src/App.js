import GlobalState from "./contexts/GloabalState";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./router/Router";

function App() {

  const context = GlobalState()
  
  return (
    <>
    <GlobalStyled/>
      <GlobalContext.Provider value={context} >
      <Router/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
