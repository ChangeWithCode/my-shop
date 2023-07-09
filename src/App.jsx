import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Banners from "./Components/Banner/Banner";
import Collecton from "./Components/shop/collections";
function App() {

  return (
    <>
      <Header></Header>
      <Banners></Banners>
      <Collecton></Collecton>
    </>
  );
}

export default App;
