import { useState, useEffect } from "react";

const useInitialState = API => {
  // se asigna el estado y su valor inicial
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return videos;
};

export default useInitialState;
