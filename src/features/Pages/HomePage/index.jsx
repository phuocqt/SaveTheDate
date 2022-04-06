import Footer from "../../../components/Footer";
import Album from "../../Album";
import Countdown from "../../Countdown";
import GuestBook from "../../GuestBook/GuestBook";
import Navbar from "../../Navbar";
import Slide from "../../Slide";
import WeddingEvent from "../../WeddingEvent";

function HomePage() {
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

export default HomePage;
