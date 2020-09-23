import React from "react";

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Database from "../components/Database";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Buttons data={Database} />
      <Footer />
    </div>
  );
}

export default Home;
