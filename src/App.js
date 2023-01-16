import Home from "./components/home/Home";
import MainProvider from '../src/context/MainContext'
import Header from "./components/Header";

function App() {
  return (
    <MainProvider>
      <Header />
      <Home />
    </MainProvider>
  );
}

export default App;
