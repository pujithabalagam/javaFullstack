import React from "react";
import Navbar from "./components/Navbar";
import CakeIntro from "./components/CakeIntro";
import CakeButtons from "./components/CakeButtons";
import CakeList from "./components/CakeList";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <CakeIntro />
      <CakeButtons />
      <CakeList />
      <Footer />
    </>
  );
}

export default App;