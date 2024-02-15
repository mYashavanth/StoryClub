import "./App.css";
import { Button } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import LandingPage1 from "./Pages/LandingPage1/LandingPage1";
import LandingPage2 from "./Pages/LandingPage2/LandingPage2";
import HorizontalSlider from "./Components/HorizontalSlider/HorizontalSlider";
import SliderComponent from "./Components/Slider/Slider";

function App() {
  return (
    <>
      <Navbar />
      {/* <HorizontalSlider /> */}
      <SliderComponent />
    </>
  );
}

export default App;
