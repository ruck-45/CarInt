// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./subComponents/Hero";
import Track from "./subComponents/Track";
import Services from "../Services/Services";
import About from "../About/About";
import Carasouel from "./subComponents/Carasouel";


const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Hero />
      <Services/>
      <About/>
      <Track />
      <Carasouel/>
    </div>
  );
};

export default Home;
