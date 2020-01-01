import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carrousel>
            {initialState.mylist.map(item => (
              <CarrouselItem key={item.id} {...item} />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trends.map(item => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales Platzi Video">
        <Carrousel>
          {initialState.originals.map(item => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>
    </>
  );
};

export default Home;
