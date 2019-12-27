import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";

import "../assets/styles/app.scss";
import Footer from "../components/Footer";

const App = () => {
  // se asigna el estado y su valor inicial
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <Header />
      <Search />

      <Categories title="Mi Lista">
        <Carrousel>
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
        </Carrousel>
      </Categories>

      <Categories title="Tendencias">
        <Carrousel>
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
        </Carrousel>
      </Categories>

      <Categories title="Originales Platzi Video">
        <Carrousel>
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />

          <CarrouselItem />
        </Carrousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
