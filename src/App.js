import logo from "./logo.svg";
import "./App.scss";
import Slide from "./features/Slide";
import Navbar from "./features/Navbar";
import Countdown from "./features/Countdown";
import Album from "./features/Album";
import WeddingEvent from "./features/WeddingEvent";
import GuestBook from "./features/GuestBook/GuestBook";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Slide />
      <Navbar />
      <Countdown />
      <Album />
      <WeddingEvent />
      <GuestBook />
      <Footer />
    </div>
  );
}

export default App;
