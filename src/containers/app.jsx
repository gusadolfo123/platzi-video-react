import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";

import "../assets/styles/app.scss";
import Footer from "../components/Footer";

const App = () => (
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

export default App;
