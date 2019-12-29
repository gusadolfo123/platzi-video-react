import { useState, useEffect } from "react";

const useInitialState = () => {
  // se asigna el estado y su valor inicial
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
