import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
