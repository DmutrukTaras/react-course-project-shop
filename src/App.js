import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Shop } from "./layout/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
